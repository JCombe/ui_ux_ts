import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard"
import Home from './Home/Home';


function App() {
  return (
    <Router>
      <Switch>
         
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
    
    </Switch>
    </Router>
  );
}

export default App;
