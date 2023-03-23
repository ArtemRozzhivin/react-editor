import React from 'react';
import './BlockItem.scss';

interface BlockItemType {
  type: string;
  image: any;
}

const BlockItem: React.FC<BlockItemType> = ({ type, image }) => {
  return (
    <div className="item">
      <div className="item__img">
        <img src={image} alt="img" />
      </div>
      <div className="item__title">{type}</div>
    </div>
  );
};

export default BlockItem;
