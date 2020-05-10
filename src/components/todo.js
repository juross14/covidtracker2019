import React from 'react'

export default class todo extends React.Component {
  state = {
    id: this.props.todoprop.id,
    TitleTodo: this.props.todoprop.TitleTodo,
    TitleComments: this.props.todoprop.TitleComments,
    edittoggle: true
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdateTodo = event => {
    event.preventDefault()
    this.setState({
      TitleTodo: this.state.TitleTodo,
      TitleComments: this.state.TitleComments
    })
  }

  render() {
    return (
      <div>
        <div
          className="notepad"
          style={{
            //background: this.props.todoprop.complete ? '#67b4ff' : '',
            //color: this.props.todoprop.complete ? '#fff' : '',
            //textDecoration: this.props.todoprop.complete ? 'line-through' : '',
            border: this.props.todoprop.complete ? '1px dashed #fff' : ''
          }}
        >
          <h3>{this.state.TitleTodo} </h3>
          <span>{this.state.TitleComments}</span>
          <button onClick={this.props.onDelete}>x</button>
          <div className="moreinfo">
            <button className="editbtn" onClick={this.props.toggleCompleteprop}>
              Edit
            </button>
            {this.props.todoprop.complete && (
              <span>
                <form onSubmit={this.handleSubmit}>
                  <input
                    name="TitleTodo"
                    value={this.state.TitleTodo}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Enter Your Title"
                  />
                  <textarea
                    name="TitleComments"
                    value={this.state.TitleComments}
                    onChange={this.handleChange}
                    placeholder="Your todos..."
                  />
                  <button
                    className="savebtn"
                    onClick={this.props.toggleCompleteprop}
                  >
                    {' '}
                    Update{' '}
                  </button>
                </form>
              </span>
            )}
          </div>
        </div>
      </div>
    )
  }
}
