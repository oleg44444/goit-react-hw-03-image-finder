import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { images, handleImageClick } = this.props;

    return (
      <div>
        {images.map(image => (
          <li key={image.id} className="imageGalleryItem">
            <img
              src={image.webformatURL}
              alt={image.id}
              onClick={() => handleImageClick(image)}
            />
          </li>
        ))}
      </div>
    );
  }
}

export default ImageGalleryItem;
