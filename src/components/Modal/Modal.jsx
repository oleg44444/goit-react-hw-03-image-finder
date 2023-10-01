import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Overlay, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;
    if (!image) {
      return null;
    }
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalDiv>
          <img src={image.largeImageURL} alt={image.tags} />
        </ModalDiv>
      </Overlay>,
      modalRoot
    );
  }
}
