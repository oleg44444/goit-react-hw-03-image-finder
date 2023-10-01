import React, { Component } from 'react';
import { Header, Form, Button, Input, Label } from './Searchbar.styled';
class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onHandleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const inputText = this.state.inputValue.toLowerCase();
    this.props.onSubmit(inputText);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <Button>
            <Label className="button-label"></Label>
          </Button>

          <Input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleChange}
            value={this.state.inputValue}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
