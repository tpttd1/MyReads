import Book from "./Book";

function BookList({ title, data }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
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

export default BookList;
