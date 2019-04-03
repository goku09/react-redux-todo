import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, deleteTodo } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Todo extends Component {
  render() {
    const { todo, toggleTodo, deleteTodo } = this.props;
    return (
      <div className="todo-item-container">
        <div className="todo-select">
          <input
            type="checkbox"
            className="todo-checkbox"
            id="check-one"
            onChange={() => toggleTodo(todo.id)}
            checked={todo.completed}
          />
        </div>
        <div className="todo-item">
          <span
            className={cx(
              "todo-item-text",
              todo && todo.completed && "todo-item-text--completed"
            )}
          >
            {todo.content}
          </span>
        </div>
        <div className="todo-close" onClick={() => deleteTodo(todo.id)}>
          <FontAwesomeIcon
            icon={faTimes}
            // size="sm"
            style={{ color: "#e8d2d6" }}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleTodo, deleteTodo }
)(Todo);
