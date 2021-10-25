import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components'
const Close = styled.button`
  float: right;
  border: none;
  background: transparent;
  font-size: 18px;
  color: gray;
  align-items: center;
`;

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render() {
    let todoClass = this.props.item.done ? "done" : "undone";
    return (
      <li className="list-group-item">
        <div className={todoClass}>
          <FontAwesomeIcon icon={faCheck} onClick={this.onClickDone} className="icon"></FontAwesomeIcon>
          {this.props.item.value}
          <Close type="button" onClick={this.onClickClose}>&times;</Close>
        </div>
      </li >
    );
  }
}

export default TodoListItem