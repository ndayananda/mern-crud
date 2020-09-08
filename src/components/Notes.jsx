import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(id) {
    this.props.deleteNote(id);
  }
  
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">My Notes</h1>
          <div className="posts">
            {this.props.notes.map(({id, title, description}) => {
              return(
                <div className="box" key={id}>
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>
                      </div>
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <Link to={`/update/${id}`} className="level-item">Edit</Link>
                          <a className="level-item" aria-label="delete" onClick={e => this.deleteNote(id)}>Delete</a>
                        </div>
                      </nav>
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;