import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './components/static/AppHeader';
import BookShelf from "./components/BookShelf";
import AddButton from './components/static/AddButton';
import {SHELF_TYPES} from './utils/AppEnum';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
      books:[]
  }


    componentDidMount() {
        this.getAllBooks();
    }

    /**
     *  Calls backend api to get all available books.
     *
     */
    getAllBooks() {
        BooksAPI.getAll()
            .then(books => this.setState({books, loadingShelves: false}));
        // TODO .catch(//for fault-tolerance)
    }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <Header/>
            <div className="list-books-content">
              <div>
                <BookShelf title="Currently Reading" shelfType={SHELF_TYPES.CURRENTLY_READING} books={this.state.books}/>
                <BookShelf title="Want to Read" shelfType={SHELF_TYPES.WANT_TO_READ} books={this.state.books}/>
                <BookShelf title="Read" shelfType={SHELF_TYPES.READ} books={this.state.books}/>
              </div>
            </div>
           <AddButton/>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
