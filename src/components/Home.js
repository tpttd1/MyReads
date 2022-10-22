import { useEffect, useState } from "react";
import { CURRENTLY_READING, READ, WANT_TO_READ } from "../utils/constants";
import BookList from "./BookList";
import { getAll } from "../API/BooksAPI";

function Home() {
  const [read, setRead] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);

  useEffect(() => {
    let reads = [],
      wantToReads = [],
      currentlyReadings = [];

    getAll().then((val) => {
      val.forEach((d) => {
        if (d.shelf === READ) reads.push(d);
        else if (d.shelf === WANT_TO_READ) wantToReads.push(d);
        else if (d.shelf === CURRENTLY_READING) currentlyReadings.push(d);
      });

      setRead(reads);
      setWantToRead(wantToReads);
      setCurrentlyReading(currentlyReadings);
    });
  }, []);

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
