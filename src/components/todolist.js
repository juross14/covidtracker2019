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

  storelocal = () => {
    if (this.state.todos) {
      localStorage.setItem('myData', JSON.stringify(this.state.todos))
      alert('Added Local Storage')
    }
  }

  removelocal = () => {
    localStorage.removeItem('myData')
    this.setState(state => ({
      todos: []
    }))
    alert('Remove Local Storage')
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

  componentDidMount() {
    localStorage.getItem('myData') &&
      this.setState(state => ({
        todos: JSON.parse(localStorage.getItem('myData'))
      }))
  }

  render() {
    return (
      <section className="todoform">
        <div className="data-set-second">
          <div className="secondcol col">
            <div className="checklisttodo">
              <p>
                Hello you can view your checklist here and bookmark your list
              </p>
              <strong>
                Todos left:{' '}
                {this.state.todos.filter(todo => !todo.complete).length}
              </strong>
            </div>
            <div className="localset">
              <button onClick={this.storelocal}>
                {' '}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="arrow-alt-square-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="svg-inline--fa fa-arrow-alt-square-right fa-w-14 fa-2x"
                >
                  <path
                    fill="currentColor"
                    d="M96 276v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H108c-6.6 0-12-5.4-12-12zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                    class=""
                  />
                </svg>{' '}
                Bookmark{' '}
              </button>
              <button onClick={this.removelocal}>
                {' '}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="minus-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-minus-circle fa-w-16 fa-2x"
                >
                  <path
                    fill="currentColor"
                    d="M140 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H140zm364-28c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"
                    class=""
                  />
                </svg>{' '}
                Remove{' '}
              </button>
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
