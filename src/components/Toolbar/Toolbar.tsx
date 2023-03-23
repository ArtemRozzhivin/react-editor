import React from 'react';
import BlockItem from '../BlockItem/BlockItem';
import './Toolbar.scss';

import headline from '../../assets/Headline.svg';
import paragraph from '../../assets/text-align-left.svg';
import image from '../../assets/image.svg';
import { useAppDispatch } from '../../redux/store';
import { addItem } from '../../redux/Pattern/slice';
import { ItemType } from '../../redux/Pattern/types';

const toolbar = [
  { type: 'Headline', info: '', image: headline },
  { type: 'Paragraph', info: '', image: paragraph },
  { type: 'Button', info: '', image: image },
  { type: 'Image', info: '', image: image },
];

const Toolbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const onClickItem = (item: ItemType) => {
    dispatch(addItem(item));
  };

  return (
    <div className="toolbar">
      <div className="toolbar__list">
        {toolbar.map((item) => (
          <div key={item.type} className="toolbar__item">
            <button onClick={() => onClickItem(item)}>
              <BlockItem {...item} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
