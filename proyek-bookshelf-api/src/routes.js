/* eslint-disable linebreak-style */
const { addBooksHandler, getAllBooksHandler, getBookByIdHandler, updateBooksHandler, deleteBooksHandler } = require('./handler');


/* eslint-disable linebreak-style */
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBooksHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksHandler,
  },
];

module.exports = routes;