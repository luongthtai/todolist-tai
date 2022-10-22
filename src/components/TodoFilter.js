import React, { Component } from "react";

class TodoFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 1,
    };
  }

  activity = (e) => {
    this.props.activity(Number(e.currentTarget.id));

    const active = this.props.todos.filter((item) => item.isCompleted === true);
    const completed = this.props.todos.filter(
      (item) => item.isCompleted === false
    );

    Number(e.currentTarget.id) === 1
      ? this.props.activity(this.props.todos)
      : Number(e.currentTarget.id) === 2
      ? this.props.activity(active)
      : this.props.activity(completed);

    this.setState({
      currentIndex: Number(e.target.id),
    });
  };

  render() {
    return (
      <div className="todo-footer-container">
        <div className="todo-count">{this.props.length} items left</div>
        <div className="todo-menus">
          <span
            id="1"
            className={this.state.currentIndex === 1 ? "activity" : ""}
            onClick={this.activity}
          >
            All
          </span>
          <span
            id="2"
            className={this.state.currentIndex === 2 ? "activity" : ""}
            onClick={this.activity}
          >
            Active
          </span>
          <span
            id="3"
            className={this.state.currentIndex === 3 ? "activity" : ""}
            onClick={this.activity}
          >
            Complete
          </span>
        </div>
      </div>
    );
  }
}

export default TodoFilter;
