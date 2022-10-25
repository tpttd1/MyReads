import { useMemo } from "react";
import { CURRENTLY_READING, READ, WANT_TO_READ } from "../utils/constants";
import BookList from "./BookList";

function Home({ props }) {
  const { data, updateBook } = props;

  const separateData = useMemo(() => {
    let reads = [],
      wantToReads = [],
      currentlyReadings = [];
    data.forEach((d) => {
      if (d.shelf === READ) reads.push(d);
      else if (d.shelf === WANT_TO_READ) wantToReads.push(d);
      else if (d.shelf === CURRENTLY_READING) currentlyReadings.push(d);
    });
    return { currentlyReadings, wantToReads, reads };
  }, [data]);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookList
            title="Currently Reading"
            data={separateData.currentlyReadings}
            updateBook={updateBook}
          />
          <BookList
            title="Want to Read"
            data={separateData.wantToReads}
            updateBook={updateBook}
          />
          <BookList
            title="Read"
            data={separateData.reads}
            updateBook={updateBook}
          />
        </div>
        <div className="open-search">
          <a href="/search">Add a book</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
