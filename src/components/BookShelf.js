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
        shelfType: PropTypes.string.isRequired // This property is pas
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
                                    <Book title={book.title}
                                          author={book.authors[0]}
                                          shelfType={this.props.shelfType}
                                          url="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"/>
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