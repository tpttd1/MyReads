import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);

  const getData = () => {
    getAll().then((val) => {
      setData(val);
    });
  };

  const updateBook = (id, shelf) => {
    const book = data.filter((d) => d.id === id)[0];
    book.shelf = shelf;
    const bookList = data.map((d) => (d.id !== book.id ? d : book));
    setData(bookList);
  };

  useEffect(() => {
    getData();
  }, []);

  const props = { data, updateBook };
  return (
    <Router>
      <AppRoute props={props} />
    </Router>
  );
};

export default App;
