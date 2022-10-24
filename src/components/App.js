import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import { CURRENTLY_READING, READ, WANT_TO_READ } from "../utils/constants";
import { getAll } from "../API/BooksAPI";
import Home from "./Home";
import Search from "./Search";
import "../App.css";

const AppRoute = ({ props }) => {
  let routes = useRoutes([
    { path: "/", element: <Home props={props} /> },
    { path: "search", element: <Search props={props} /> },
  ]);
  return routes;
};

const App = () => {
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

  const props = { currentlyReading, wantToRead, read };
  return (
    <Router>
      <AppRoute props={props} />
    </Router>
  );
};

export default App;
