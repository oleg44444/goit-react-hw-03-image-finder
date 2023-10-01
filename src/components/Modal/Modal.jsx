import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import 'basiclightbox/dist/basicLightbox.min.css';

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
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={image.largeImageURL} alt={image.tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
