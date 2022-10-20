import React, { Component } from "react";
import TodoFilter from "./TodoFilter";
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.todosLength = this.todosLength.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.activity = this.activity.bind(this);
  }

  // todo length

  todosLength() {
    return this.state.todos.length;
  }

  // import toto item

  handleSubmit(value) {
    this.state.todos.push({
      id: this.state.todos.length + 1,
      title: value,
      isCompleted: true,
    });

    this.setState({
      todos: this.state.todos,
    });
  }

  // filter todo list

  activity(value) {
    console.log(value);
  }

  // handle status todo item

  handleStatus(value) {
    this.state.todos.map((item) => {
      if (item.id === value) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });

    this.setState({
      todos: this.state.todos,
    });
  }

  // edit todo items

  handleEdit(value) {
    console.log(value);
  }

  // delete todo item

  handleDelete(value) {
    const editTodo = this.state.todos.filter((item) => item.id !== value);

    this.setState({
      todos: editTodo,
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <>
        <div className="app-container">
          <TodoHeader />

          <div className="todo-container">
            <TodoForm title={this.handleSubmit} />
            <TodoFilter length={this.todosLength()} activity={this.activity} />
            <TodoList
              todos={this.state.todos}
              edit={this.handleEdit}
              delete={this.handleDelete}
              status={this.handleStatus}
            />
          </div>
        </div>

        <TodoFooter />
      </>
    );
  }
}

export default TodoApp;
