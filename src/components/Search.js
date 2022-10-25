import { useState } from "react";
import debounce from "lodash/debounce";
import { search } from "../API/BooksAPI";
import Book from "./Book";

function Search({ props }) {
  const [data, setData] = useState([]);

  const handleChange = (id, shelf) => {
    const book = data.filter((d) => d.id === id)[0];
    book.shelf = shelf;
    const bookList = data.map((d) => (d.id !== book.id ? d : book));
    setData(bookList);
    props.updateBook();
  };

  const onChange = debounce((e) => {
    const { value } = e.target;
    if (value.length) {
      search(value).then((data) => {
        if (data?.length) {
          data.forEach((item, index) => {
            if (!item?.imageLinks) data.splice(index, 1);
          });

          const compareData = data.map((d) => {
            props.data.forEach((b) => {
              if (b.id === d.id) {
                d.shelf = b.shelf;
              }
            });
            return d;
          });
          setData(compareData);
        } else {
          setData([]);
        }
      });
    } else {
      setData([]);
    }
  }, 500);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/">
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {data.map((val) => {
            return (
              <li key={val.id}>
                <Book {...val} updateBook={handleChange} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Search;
