import React, { Component } from "react";
import todo from "./Data";
import TodoFilter from "./TodoFilter";
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todo,
    };
  }

  todosLength = () => {
    return this.state.todos.length;
  };

  handleSubmit = (value) => {
    todo.push({
      id: this.state.todos.length + 1,
      title: value,
      isCompleted: true,
    });

    this.setState({
      todos: todo,
    });
  };

  // callbackAll = () => {
  //   const todosAll = todo.filter((item) => item.isCompleted === false);

  //   this.setState({
  //     todos: todosAll
  //   });
  // };

  render() {
    console.log(todo)
    return (
      <>
        <div className="app-container">
          <TodoHeader />

          <div className="todo-container">
            <TodoForm title={this.handleSubmit} />
            <TodoFilter
              length={this.todosLength()}
              callback={this.callbackAll}
            />
            <TodoList todos={this.state.todos} />
          </div>
        </div>

        <TodoFooter />
      </>
    );
  }
}

export default TodoApp;
