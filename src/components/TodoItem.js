import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true
    };
  }

  handleStatus = () => {
    this.props.status(this.props.todo.id)

    this.setState({
      status: !this.state.status
    })
  }

  handleEdit = () => {
    this.props.editItem(this.props.todo.id)
  }

  handleDelete = () => {
    this.props.deleteItem(this.props.todo.id)
  }

  render() {
    return (
      <div className="todo-item-container">
        <span
          className="todo-item-toggle"
          onClick={this.handleStatus}
        >
          <img className="status" src={this.state.status ? "assets/active-tick.svg" : "assets/complete-tick.svg"} alt="tick" />
        </span>
        <div className={this.state.status ? "todo-item-content" : "todo-item-content  completed"}>{this.props.todo.title}</div>
        <div className="todo-item-options">
          <span className="icon-btn" onClick={this.handleEdit}>
            <img src="assets/edit.svg" alt="edit" />
          </span>
          <span className="icon-btn" onClick={this.handleDelete}>
            <img src="assets/delete.svg" alt="close" />
          </span>
        </div>
      </div>
    );
  }
}

export default TodoItem;