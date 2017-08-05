/**
 * Created by amit on 8/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {SHELF_TYPES} from '../utils/AppEnum';

/**
 * Class represents a popup menu that is associated with the book component
 */
class PopupMenu extends React.Component {

    static propTypes = {
        shelfType: PropTypes.oneOf(Object.values(SHELF_TYPES)).isRequired,
        moveBookToShelfHandler: PropTypes.func.isRequired
    }


    moveBookToShelfHandler = (event) => {
        this.props.moveBookToShelfHandler(event.target.value);
    }

    render(){

        return (
            <div className="book-shelf-changer">
                <select value={this.props.shelfType} onChange={this.moveBookToShelfHandler}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default PopupMenu;