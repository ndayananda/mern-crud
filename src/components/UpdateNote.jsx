import React from 'react';
import NoteForm from './NoteForm';

class UpdateNote extends React.Component {
  constructor(props) {
    super(props);
    this.updateNote = this.updateNote.bind(this);
  }

  updateNote(note) {
    this.props.updateNote(note);
  }
  
  render() {
    const { id } = this.props.match.params;
    const note = this.props.notes.find(note => note.id === parseInt(id));
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Update Note</h1>
          <div className="columns is-mobile">
            <div className="column is-three-fifths">
            <NoteForm note={note} updateNote={this.updateNote} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UpdateNote;