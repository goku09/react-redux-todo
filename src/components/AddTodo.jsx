import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../redux/actions";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = e => {
    if (e.key === "Enter") {
      this.props.addTodo(this.state.input);
      this.setState({ input: "" });
    }
  };

  handleToogleAll = () => {
    const { todos, toggleTodo } = this.props;
    todos.forEach(element => {
      if (!element.completed) {
        toggleTodo(element.id);
      }
    });
  };

  render() {
    return (
      <div className="add-todo">
        <div className="input-icon" onClick={this.handleToogleAll}>
          <FontAwesomeIcon
            icon={faAngleDown}
            size="2x"
            style={{ color: "lightgray" }}
          />
        </div>

        <input
          className="input-box"
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          onKeyPress={this.handleAddTodo}
          placeholder="What needs to be done?"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: getTodosByVisibilityFilter(state, state.visibilityFilter)
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(AddTodo);
