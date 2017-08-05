/**
 * Created by amit on 8/5/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import PopupMenu from './PopupMenu';
import {SHELF_TYPES}  from '../utils/AppEnum';


/**
 * Class represents a book component which represents the title of book and image
 * A book component can be part of a book shelf in this application.
 * @author amit
 */
class Book extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        shelfType: PropTypes.oneOf(Object.values(SHELF_TYPES)).isRequired
    };


    /**
     *
     *
     * @param selectedShelf The value of the popup menu item selected which is basically the shelf name
     * to which the book needs to be moved.
     */
    moveBookToShelfHandler(selectedShelf) {
        console.log("Move to shelf " + selectedShelf);
    }

    renderBook() {
        return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={
                    {
                        width: 128, height: 193,
                        backgroundImage: `url("${this.props.url}")`
                    }
                }>
                </div>
                <PopupMenu shelfType={this.props.shelfType} moveBookToShelfHandler={this.moveBookToShelfHandler}/>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.author}</div>
        </div>);
    }


    render() {
        return this.renderBook();
    }

}

export default Book;