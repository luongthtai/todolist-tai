import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.props.title(this.state.value);
    e.preventDefault();

    this.setState({
      value: ""
    })
  };

  render() {
    return (
      <div className="todo-form-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            placeholder="What need to be done?"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default TodoForm;
