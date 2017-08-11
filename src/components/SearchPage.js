/**
 * Created by amit on 8/5/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './../BooksAPI';
import Book from './Book';

/**
 * Class is responsible to provide a search component to the app where
 * users can search for books.
 */
class SearchPage extends React.Component {

    static propTypes = {
        addNewBooksToShelf : PropTypes.func
    }

    state = {
        results : []
    }

    addNewBooksToShelf = (event) => {
        const query = event.target.value;

        BooksAPI.search(query, 10).then((books)=> {
            this.setState({result:[]});
            setTimeout(() => {
                this.setState({results:books});
            }, 300);
        });
    }

    moveBookToShelf = (shelfId, bookId) => {
        this.props.addBookToShelf(shelfId,bookId);
        this.setState((state)=> {
            state.results.forEach((book) => {
               if(book.id === bookId) {
                   book.shelf = shelfId;
               }
            });
        });
    }

    render() {
        return(<div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/" />
                <div className="search-books-input-wrapper">
                    {/*
                     NOTES: The search from BooksAPI is limited to a particular set of search terms.
                     You can find these search terms here:
                     https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                     However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                     you don't find a specific author or title. Every search is limited by search terms.
                     */}
                    <input type="text" placeholder="Search by title or author" onKeyUp={this.addNewBooksToShelf}/>

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.results && this.state.results.length > 0 && this.state.results.map((book) => {
                        return (
                            <li key={book.id}>
                                <Book id={book.id}
                                      title={book.title}
                                      author={Array.isArray(book.authors) ? book.authors.join(', ') : book.authors}
                                      shelfType={book.shelf}
                                      url={book.imageLinks && book.imageLinks.thumbnail}
                                      moveBookToShelf={this.moveBookToShelf}
                                />
                            </li>
                        )
                    })}

                </ol>
            </div>
        </div>);
    }
}

export default SearchPage;