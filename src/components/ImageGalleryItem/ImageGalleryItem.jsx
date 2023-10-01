import React, { Component } from 'react';
import { Li, Img } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { images, handleImageClick } = this.props;

    return (
      <>
        {images.map(image => (
          <Li key={image.id}>
            <Img
              src={image.webformatURL}
              alt={image.id}
              onClick={() => handleImageClick(image)}
            />
          </Li>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
