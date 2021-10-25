// import logo from './logo.svg';
import React from "react";
import './App.css';
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todoItems: [
        { index: 1, value: "learn react", done: false },
        { index: 2, value: "Go shopping", done: true },
        { index: 3, value: "buy flowers", done: true }
      ]
    }
  }

  render() {
    return (
      <>
        <TodoHeader />
        <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
        <TodoForm addItem={this.addItem} />
      </>
    )
  }
}

export default App;
