import React from "react";
import TodoListItem from './TodoListItem'

class TodoList extends React.Component {
  render() {
    let items = this.props.items.map((item, index) => {
      return (
        <TodoListItem className="list-group-item"
          key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone}
        />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

export default TodoList