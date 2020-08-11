import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class Results extends Component {
  state = {
    books: [],
    savedBooks: [],
    search: "",
  };

  handleSearchBook = (event) => {
    API.getBook(this.state.search).then((response) =>
      this.setState({ books: response.data.items })
    );
  };

  handleSaveBook = (bookData) => {
    API.saveBook(bookData)
      .then((res) => {
        this.setState({
          savedBooks: this.state.savedBooks.concat([res]),
        });
        console.log(this.state.savedBooks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setBook = (event) => {
    this.setState({ search: event.target.value });
  };

  generateBooks = () => {
    return this.state.books.map((book) => {
      return (
        <div className="card">
          <h6 className="card-header">{book.volumeInfo.title}</h6>
          <img
            src={
              (book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail) ||
              "https://www.placecage.com/300/200"
            }
            alt={book.volumeInfo.title}
            width="150"
          />
          <div className="card-body">
            <h5 className="card-title">by: {book.volumeInfo.authors}</h5>
            <p className="card-text">{book.volumeInfo.description}</p>
            <a
              href={book.volumeInfo.canonicalVolumeLink}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Bookstore
            </a>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                this.handleSaveBook({
                  title: book.volumeInfo.title,
                  authors: book.volumeInfo.authors,
                  description: book.volumeInfo.description,
                  image: book.volumeInfo.imageLinks.smallThumbnail,
                  link: book.volumeInfo.canonicalVolumeLink,
                })
              }
            >
              Save Book
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.state.books);
    return (
      <div className="main">
        <input type="text" name="search" onChange={this.setBook} />
        <button onClick={this.handleSearchBook}>Search</button>
        {(this.state.books.length && this.generateBooks()) ||
          this.state.books.length === 0}
      </div>
    );
  }
}

export default Results;
