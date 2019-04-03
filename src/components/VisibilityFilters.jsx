import React, { Component } from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter, deleteTodo } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import { getTodosByVisibilityFilter } from "../redux/selectors";

class VisibilityFilters extends Component {
  handleClear = () => {
    const { todos, deleteTodo } = this.props;
    todos.forEach(element => {
      if (element.completed) {
        deleteTodo(element.id);
      }
    });
  };

  render() {
    const { activeFilter, setFilter, todos } = this.props;
    return (
      <div className="visibility-filters-container">
        <div className="todo-item-counter">
          {todos.length > 1
            ? todos.length + " items left"
            : todos.length + " item left"}
        </div>
        <div className="visibility-filters">
          {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
            const currentFilter = VISIBILITY_FILTERS[filterKey];
            return (
              <span
                key={`visibility-filter-${currentFilter}`}
                className={cx(
                  "filter",
                  currentFilter === activeFilter && "filter--active"
                )}
                onClick={() => {
                  setFilter(currentFilter);
                }}
              >
                {currentFilter}
              </span>
            );
          })}
        </div>
        <div className="clear-completed">
          <span onClick={this.handleClear}>Clear Completed</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeFilter: state.visibilityFilter,
    todos: getTodosByVisibilityFilter(state, state.visibilityFilter)
  };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setFilter, deleteTodo }
)(VisibilityFilters);
