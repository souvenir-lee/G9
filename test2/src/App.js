// import logo from './logo.svg';
import React from "react";
import './App.css';
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class App extends React.Component {
  constructor(props) {
    super();
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {
      todoItems: [
        { index: 1, value: "learn react", done: false },
        { index: 2, value: "Go shopping", done: true },
        { index: 3, value: "buy flowers", done: true }
      ]
    }
  }

  addItem(todoItem) {
    this.state.todoItems.unshift({
      index: this.state.todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: this.state.todoItems });
  }
  removeItem(itemIndex) {
    this.state.todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: this.state.todoItems });
  }
  markTodoDone(itemIndex) {
    var todo = this.state.todoItems[itemIndex];
    this.state.todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? this.state.todoItems.push(todo) : this.state.todoItems.unshift(todo);
    this.setState({ todoItems: this.state.todoItems });
  }

  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList className="list-group" items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
        <TodoForm className="form-inline" addItem={this.addItem} />
      </div>
    )
  }
}

export default App;
