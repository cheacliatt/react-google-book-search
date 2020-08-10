import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {
  state = {
    books: [],
    savedBooks: [],
  };

  handleSearch = (event) => {
    const bookTitle = event.target.value;
    API.getBook(bookTitle).then((response) =>
      this.setState({ books: response.data.items })
    );
  };

  //   handleSave = (id) => {
  //     API.saveBook(id)
  //       .then((response) => {
  //         this.setState({ savedBooks: this.state.savedBooks.concat([response]) });
  //         console.log("this is my saved book", this.state.savedBooks)
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  render() {
    console.log(this.state.books);
    return (
      <div>
        <form>
          <label
            htmlFor="inputPassword"
            className="col-sm-2 col-form-label"
            style={{ marginLeft: "40%" }}
          >
            Type to Search for a Book
          </label>
          <div className="form-group row">
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="search"
                onChange={this.handleSearch}
                style={{ justifyContent: "center", marginLeft: "15%" }}
              />
            </div>
          </div>
        </form>
        {this.state.books.map((book) => (
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                {/* how to get thumbnails when they don't have them  */}
                {/* <img src={book.volumeInfo.imageLinks.smallThumbnail || "https://f0.pngfuel.com/png/137/448/black-book-logo-png-clip-art-thumbnail.png"} class="card-img" alt={book.volumeInfo.title} width="10px" height="300px" /> */}
                <img
                  src={
                    (book.volumeInfo.imageLinks &&
                      book.volumeInfo.imageLinks.smallThumbnail) ||
                    "https://www.placecage.com/300/200"
                  }
                  alt={book.volumeInfo.title}
                  width="300"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                  <p className="card-text">{book.volumeInfo.authors} </p>
                  <p className="card-text">{book.volumeInfo.description}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginBottom: "10px" }}
                    onClick={() => this.handleSave(book._id)}
                  >
                    Save
                  </button>
                  <br></br>
                  <button type="button" className="btn btn-primary">
                    <a
                      href={book.volumeInfo.infoLink}
                      style={{ color: "white" }}
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Results;
