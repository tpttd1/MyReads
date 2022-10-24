import BookList from "./BookList";

function Home({ props }) {
  const { currentlyReading, wantToRead, read } = props;

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookList title="Currently Reading" data={currentlyReading} />
          <BookList title="Want to Read" data={wantToRead} />
          <BookList title="Read" data={read} />
        </div>
        <div className="open-search">
          <a href="/search">Add a book</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
