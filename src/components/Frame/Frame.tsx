import React from 'react';
import Button from './components/Button/Button';
import Headline from './components/Headline/Headline';
import ImageItem from './components/ImageItem/ImageItem';
import Paragraph from './components/Paragraph/Paragraph';
import './Frame.scss';

import block from '../../assets/block.png';
import { useSelector } from 'react-redux';
import { selectPattern } from '../../redux/Pattern/select';
import { ItemType } from '../../redux/Pattern/types';

const Frame: React.FC = () => {
  const { pattern } = useSelector(selectPattern);

  const renderItem = (item: ItemType) => {
    switch (item.type) {
      case 'Paragraph':
        return <Paragraph>{item.info}</Paragraph>;
      case 'Headline':
        return <Headline>{item.info}</Headline>;
      case 'Button':
        return <Button>{item.info}</Button>;
      case 'Image':
        return <ImageItem>{item.info}</ImageItem>;
    }
  };

  return (
    <div className="frame">
      <div className="frame__list">
        {pattern.map((item) => (
          <div key={item.id} className="frame__item">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame;
