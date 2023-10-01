import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    text: '',
  };

  onSubmitForm = data => {
    this.setState({ text: data });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery search={this.state.text} />
      </Container>
    );
  }
}
