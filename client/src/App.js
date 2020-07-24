import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ul>
          <li>
            <NavLink to='/login'>LOGIN</NavLink>
          </li>
          <li>
            <NavLink to='/'></NavLink>
          </li>
        </ul> */}
        <Switch>
        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path='/' component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
