/**
 * Created by amit on 8/5/17.
 */

import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


/**
 * BookShelf class represents a bookshelf.
 * BookShelf contains 1 or many book components.
 * Books can be transferred from one shelf to another.
 *
 */
class BookShelf extends React.Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        books : PropTypes.array,
        shelfType: PropTypes.string.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    }

    moveBookToShelf = (shelfId, bookId) => {
        this.props.moveBookToShelf(shelfId, bookId);
    }

    render() {
        const books = this.props.books.filter(({shelf}) => shelf === this.props.shelfType);

        return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => {
                            return (
                                <li key={book.id}>
                                    <Book id={book.id}
                                          title={book.title}
                                          author={book.authors[0]}
                                          shelfType={this.props.shelfType}
                                          url={book.imageLinks.smallThumbnail}
                                          moveBookToShelf={this.props.moveBookToShelf}
                                    />
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
            );

    }

}

export default BookShelf;