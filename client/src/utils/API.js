// This calls the google books API and the database routes, which are exported to the front end 

import axios from "axios";

export default {
  //  Gets books from the query passed through the API call
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Returns the saved books in the database
  savedBooks: function () {
    return axios.get("/api/books").then((result) => result.data);
  },
  // Saves a book to the database
  saveBook: function (bookInfo) {
    return axios.post("/api/books", bookInfo).then((result) => result.data);
  },
  //Deletes a book given a specific id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then((result) => result.data);
  },
};