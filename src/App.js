import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Schedule from './pages/schedule'
import Login from './pages/login'
import SignUp from './pages/signup'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
