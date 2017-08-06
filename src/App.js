import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css'
import Header from './components/static/AppHeader';
import BookShelf from "./components/BookShelf";
import AddButton from './components/static/AddButton';
import {SHELF_TYPES} from './utils/AppEnum';
import {Route} from 'react-router-dom';
import SearchPage from './components/SearchPage';



class BooksApp extends React.Component {
  state = {
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
     * @param destShelf
     * @param bookId
     */
    moveBookToShelf = (destShelf, bookId) => {
        this.setState((state)=>{
            state.books.forEach(book => {
                // Find the matching book Id and then change the shelf to destination shelf.
                if(book.id === bookId) {
                    book.shelf =destShelf;
                }
            });
        });
    }

    addBookToShelf = (destShelf, bookId) => {
       BooksAPI.get(bookId).then((book) => {
          this.setState((state) => {
              let bookAlreadyAdded = false;
              state.books.forEach(book => {
                  // Find the matching book Id and then change the shelf to destination shelf.
                  if(book.id === bookId) {
                      book.shelf =destShelf;
                      bookAlreadyAdded = true;
                  }
              });

              if(!bookAlreadyAdded) {
                  // Change the shelf property to the destination shelf to which the user wants to add the book.
                  book.shelf = destShelf;
                  state.books.push(book);
              }

          });
       });
    }



    renderSearchPage = () => {
      return (
          <SearchPage addBookToShelf={this.addBookToShelf}/>
      );
    }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <Header/>
          <Route exact path="/" render={this.renderShelves}/>
          <Route path="/search" render={this.renderSearchPage}/>
          <AddButton/>
        </div>
      </div>
    )
  }
}

export default BooksApp
