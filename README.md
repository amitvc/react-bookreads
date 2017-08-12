This project was created as part of course work needed for udacity react training. The project is a simple book shelf app that integrates with udacity backend apis to 
manage books and shelfs. 

## Install and use
To install this on local machine you will need npm. 
After you have cloned the repository you will need to install the dependencies for the application
Once you have npm installed go the root folder in the project and type npm install
NPM is node package manager that will download dependencies needed for project. If you are curious
to see what those are check package.json. 
Once dependencies are done type npm start which will start the app on default port of 3000. 

## Navigate through the app
The first page displays 3 shelfs with one or more books. You can click on down arrow next to the
book icon to move the book to other shelfs.
The `+` button navigates the app to search page where you can search books and also move them to one of the
3 shelfs. 

## Backend Server
Udacity provided the backend api. The file that has api calls is BooksApi.js

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

