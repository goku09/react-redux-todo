import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

import { getTodosByVisibilityFilter } from "../redux/selectors";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todo-list-container">
        {todos && todos.length
          ? todos.map((todo, index) => {
              return <Todo key={"todo-" + todo.id} todo={todo} />;
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
