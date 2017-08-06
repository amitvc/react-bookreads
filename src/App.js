import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './components/static/AppHeader';
import BookShelf from "./components/BookShelf";
import AddButton from './components/static/AddButton';
import {SHELF_TYPES} from './utils/AppEnum';
import {Route} from 'react-router-dom';
import SearchPage from './components/SearchPage';



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

    /**
     * Render all 3 shelves here.
     */
    renderShelves = () => {
      return (
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" shelfType={SHELF_TYPES.CURRENTLY_READING} books={this.state.books} moveBookToShelf={this.moveBookToShelf}/>
          <BookShelf title="Want to Read" shelfType={SHELF_TYPES.WANT_TO_READ} books={this.state.books} moveBookToShelf={this.moveBookToShelf}/>
          <BookShelf title="Read" shelfType={SHELF_TYPES.READ} books={this.state.books} moveBookToShelf={this.moveBookToShelf}/>
        </div>
      </div>
      );
    }

    /**
     * Function is responsible to move a book from current shelf to destination shelf.
     * @param shelfId
     * @param bookId
     */
    moveBookToShelf = (shelfId, bookId) => {

        let IsInShelves = this.state.books.find(({id}) => id === bookId);
        console.log(IsInShelves);
        console.log(shelfId);
        this.setState((state)=>{
            state.books.forEach(book => {
                if(book.id === bookId) {
                    book.shelf =shelfId;
                }
            });

        });

    }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <Header/>
          <Route exact path="/" render={this.renderShelves}/>
          <Route path="/search" component={SearchPage}/>
          <AddButton/>
        </div>
      </div>
    )
  }
}

export default BooksApp
