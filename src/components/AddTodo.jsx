import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    //Dispatch action to add todo
    //Set state back to empty string
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
        <button className="add-todo-btn" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
