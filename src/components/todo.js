import React from 'react'

export default props => (
  <div
    className="notepad"
    onClick={props.toggleCompleteprop}
    style={{
      background: props.todoprop.complete ? '#67b4ff' : '',
      color: props.todoprop.complete ? '#fff' : '',
      textDecoration: props.todoprop.complete ? 'line-through' : '',
      border: props.todoprop.complete ? '1px dashed #fff' : ''
    }}
  >
    <h3>{props.todoprop.TitleTodo} </h3>
    <span>{props.todoprop.TitleComments}</span>
    <button onClick={props.onDelete}>x</button>
  </div>
)
