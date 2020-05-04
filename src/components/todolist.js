import React from 'react'
import Todoform from './todoform'
import Todo from './todo'

export default class todolist extends React.Component {
  state = {
    //intialize empty objective in order to store the data
    todos: []
  }

  addtodo = todo => {
    this.setState({
      //Able to retrieve the old set of object and data , previous an present
      todos: [todo, ...this.state.todos]
    })
    console.log(this.state.todos)
  }

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            // similar each array map updated
            ...todo,
            complete: !todo.complete
          }
        } else {
          return todo
        }
      })
    }))
  }

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }

  render() {
    return (
      <section className="todoform">
        <div className="data-set-second">
          <div className="secondcol col">
            <div className="checklisttodo">
              <p>Hello you can view your checklist here</p>
              <strong>
                Todos left:{' '}
                {this.state.todos.filter(todo => !todo.complete).length}
              </strong>
            </div>
            <div className="frametodo">
              {this.state.todos.map(todo => (
                <div key={todo.id}>
                  <Todo
                    toggleCompleteprop={() => this.toggleComplete(todo.id)}
                    onDelete={() => this.handleDeleteTodo(todo.id)}
                    todoprop={todo}
                  />
                </div>
              ))}
            </div>
          </div>
          <Todoform onSubmit={this.addtodo} />
        </div>
      </section>
    )
  }
}
