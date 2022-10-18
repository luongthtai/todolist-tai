import React, { Component } from "react";

class TodoFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 1
    };
  }

  onclick(index) {
    this.setState({
      currentIndex: index
    })
  }

  render() {
    return (
      <div className="todo-footer-container">
        <div className="todo-count">{this.props.length} items left</div>
        <div className="todo-menus">
          <span className={this.state.currentIndex === 1 ? "activity" : "inactive"} onClick={()=> {this.onclick(1)}}>All</span>
          <span className={this.state.currentIndex === 2 ? "activity" : "inactive"} onClick={()=> {this.onclick(2)}}>Active</span>
          <span className={this.state.currentIndex === 3 ? "activity" : "inactive"} onClick={()=> {this.onclick(3)}}>Complete</span>
        </div>
      </div>
    );
  }
}

export default TodoFilter;
