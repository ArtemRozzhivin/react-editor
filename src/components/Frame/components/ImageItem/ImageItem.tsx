import React from 'react';
import './ImageItem.scss';

interface ImageItemType {
  children: string;
}

const ImageItem: React.FC<ImageItemType> = ({ children }) => {
  return (
    <div className="image">
      {children ? (
        <img className="image__item" src={children} alt="Image" />
      ) : (
        <div>Картинка не завантажена!</div>
      )}
    </div>
  );
};

export default ImageItem;
