// This calls the google books API and the database routes, which are exported to the front end 

import axios from "axios";

export default {
  // This is the main Google Books API call
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  //this returns the saved books in the database
  getSavedBooks: function () {
    return axios.get("/api/books").then((result) => result.data);
  },
  //this saves a book to the database
  saveBook: function (bookInfo) {
    return axios.post("/api/books", bookInfo).then((result) => result.data);
  },
  //deletes a book given a specific id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then((result) => result.data);
  },
};