import React from 'react';
import BlockItem from '../BlockItem/BlockItem';
import './Toolbar.scss';

import headline from '../../assets/Headline.svg';
import paragraph from '../../assets/text-align-left.svg';
import image from '../../assets/image.svg';
import { useAppDispatch } from '../../redux/store';
import { addItem } from '../../redux/Pattern/slice';
import { ItemType, ToolbarType } from '../../redux/Pattern/types';

const toolbar: ToolbarType[] = [
  { type: 'Headline', image: headline },
  { type: 'Paragraph', image: paragraph },
  { type: 'Button', image: image },
  { type: 'Image', image: image },
];

const Toolbar: React.FC = () => {
  const dispatch = useAppDispatch();

  const onClickItem = (item: ToolbarType) => {
    dispatch(addItem(item));
  };

  const onDragStartItem = (e: React.DragEvent<HTMLButtonElement>, item: any) => {
    e.dataTransfer.setData('item', JSON.stringify(item));
  };

  return (
    <div className="toolbar">
      <div className="toolbar__list">
        {toolbar.map((item) => (
          <div key={item.type} className="toolbar__item">
            <button
              draggable
              onDragStart={(e) => onDragStartItem(e, item)}
              onClick={() => onClickItem(item)}>
              <BlockItem {...item} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
