import React from "react";
import styled from 'styled-components'

const FormControl = styled.input`
  width: 50%;
  margin-left: 80px;
`;
const AddButton = styled.button`
  width: 10%;
`

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();
    }
  }
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <FormControl type="text" ref="itemName" className="form-control" placeholder="할 일을 적어주세요" />
        <AddButton type="submit">추가</AddButton>
      </form>
    );
  }
}

export default TodoForm;