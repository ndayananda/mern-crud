import React from 'react';

export default class Notes extends React.Component {
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
  }

  render() {
    return (
      <div className="container">
        {this.state.notes.map(({id, title, description}) => {
          return(
            <div className="box" key="{id}">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    )
  }
}