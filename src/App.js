import React from "react";


import Testing from "./Testing";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Testing2 from "./Testing2";
import Login from "./Login";
import Reducer from "./Reducer"
import Home from "./Home";


export default function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Switch >
          <Route path="/" exact component={Home} />
          <Route exact path="/about" component={Testing} />
          <Route exact path="/shop" component={Testing2} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reducer" component={Reducer} />
        </Switch>
      </div>
    </Router>
  );
}




