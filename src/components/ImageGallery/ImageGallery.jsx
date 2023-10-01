import React, { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    selectedImage: null,
  };
  togleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      this.setState({ page: 1, images: [] }, () => {
        this.loadImages();
      });
    }
  }
  handleImageClick = selectedImage => {
    this.setState({ selectedImage });
  };
  openModal = image => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  loadImages = () => {
    const { page } = this.state;
    const { search } = this.props;

    this.setState({ isLoading: true });

    axios
      .get('https://pixabay.com/api/', {
        params: {
          q: search,
          page: page,
          per_page: 12,
          key: '38612170-77e451be80bcbbe7a33b7fee0',
        },
      })
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
          isLoading: false,
        }));
      })
      .catch(error => {
        console.error('Помилка при отриманні даних:', error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <div>
        <ul className="imageGallery">
          <ImageGalleryItem
            images={images}
            handleImageClick={this.handleImageClick}
          />
        </ul>
        {isLoading ? (
          <Loader />
        ) : (
          images.length > 0 &&
          images.length % 12 === 0 && <Button onClick={this.loadImages} />
        )}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default ImageGallery;
