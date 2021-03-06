import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./style.css";

export default class TodoApp extends Component {
  render() {
    return (
      <div className="todo-app">
        <h1 className="todo-heading">todos</h1>
        <div className="main-app">
          <AddTodo />
          <TodoList />
          <VisibilityFilters />
        </div>
      </div>
    );
  }
}
