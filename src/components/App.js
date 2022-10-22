import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import "../App.css";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "search", element: <Search /> },
  ]);
  return routes;
}

const App = () => {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
}

export default App;
