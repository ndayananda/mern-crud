import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class NoteForm extends React.Component {

  constructor(props) {
    super(props);

    const {note: {id = null, title = '', description = ''} = {}} = this.props;

    this.state = {
      id,
      title,
      description
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();    
    this.props.updateNote({...this.state});
    this.props.history.push('/');
  }

  cancelHandler() {
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" name="title" value={this.state.title} onChange={this.changeHandler} />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" name="description" value={this.state.description} onChange={this.changeHandler}></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light" onClick={this.cancelHandler}>Cancel</button>
          </div>
        </div>
      </form>
    )
  }
}

NoteForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default withRouter(NoteForm);