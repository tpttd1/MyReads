import { useState } from "react";
import debounce from "lodash/debounce";
import { search } from "../API/BooksAPI";
import Book from "./Book";

function Search() {
  const [data, setData] = useState([]);
  const onChange = debounce((e) => {
    const { value } = e.target;
    if (value.length) {
      search(value).then((data) => {
        if (data?.length) {
          data.forEach((item, index) => {
            if (!item?.imageLinks) data.splice(index, 1);
          });
          setData(data);
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
                <Book {...val} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Search;
