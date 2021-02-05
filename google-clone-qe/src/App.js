import React from "react";
import './App.css';
import Home from "./pages1/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/search">
            {/* <SearchPage /> */}
            <h1>This is the search page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
