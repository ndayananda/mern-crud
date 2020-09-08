import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import UpdateNote from './components/UpdateNote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: [{
          id: 101,
          title: 'First Note',
          description: 'First note description'
        }, {
          id: 102,
          title: 'Second Note',
          description: 'Second note description'
        }]
    };

    this.updateNote = this.updateNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  updateNote(note) {
    this.setState( { notes: this.state.notes.map(item => item.id === note.id ? note : item) } );
  }

  addNote(note) {
    this.setState({notes: [...this.state.notes, note]});
  }

  deleteNote(id) {
    this.setState( { notes: this.state.notes.filter(item => item.id !== id) } );
  }

  render() {
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
          <Route exact path="/" render={props => <Notes {...props} notes={this.state.notes} deleteNote={this.deleteNote} /> } />
          <Route path="/create" render={props => <CreateNote {...props} addNote={this.addNote} />} />
          <Route path="/update/:id" render={props => <UpdateNote  {...props} notes={this.state.notes} updateNote={this.updateNote} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
