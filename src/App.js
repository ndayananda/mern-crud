import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Notes from './components/Notes';

function App() {
  return (
    <div className="notes-app">
      <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="Main Naviagation">
        <div className="container">
          <div className="navbar-brand is-size-3">
            <Link className="navbar-item" to="/">Notes App</Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">Notes</Link>
              <Link to="/create" className="navbar-item">Create Notes</Link>
            </div>
          </div>
        </div>      
      </nav>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
