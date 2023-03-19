import React from 'react';
import './ImageItem.scss';

interface ImageItemType {
  image: string;
}

const ImageItem: React.FC<ImageItemType> = ({ image }) => {
  return (
    <div className="image">
      <img className="image__item" src={image} alt="img" />
    </div>
  );
};

export default ImageItem;
