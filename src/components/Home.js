import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookList from "./BookList";

function Home() {
  const navigate = useNavigate();
  const [showSearchPage, setShowSearchPage] = useState(false);

  const onClick = () => {
    // navigate('/search');
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchPage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1 onClick={onClick}>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookList title="Currently Reading" />
            <BookList title="Want to Read" />
            <BookList title="Read" />
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
