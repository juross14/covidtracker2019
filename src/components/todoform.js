import React from 'react'
import shortid from 'shortid'

export default class todoform extends React.Component {
  state = {
    TitleTodo: '',
    TitleComments: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit({
      id: shortid.generate(),
      TitleTodo: this.state.TitleTodo,
      TitleComments: this.state.TitleComments,
      complete: false
    })
    this.setState({
      TitleTodo: '',
      TitleComments: ''
    })
  }

  render() {
    return (
      <div className="firstcol col">
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
          <button onClick={this.handleSubmit}>add todo</button>
        </form>
      </div>
    )
  }
}
