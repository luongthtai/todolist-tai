import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="todo-list-container">
        {this.props.todos.map((item) => (
          <TodoItem todo={item} key={item.id} editItem={this.props.edit} deleteItem={this.props.delete} status={this.props.status}/>
        ))}
      </div>
    );
  }
}

export default TodoList;
