/**
 * Created by amit on 8/5/17.
 */

import {Link} from 'react-router-dom';
import React from 'react';


const AddButton =  (props) => {
    return (
        <div className="open-search">
            <Link to='test'>Add a book</Link>
         </div>
    );
}

export default AddButton;