import React from 'react';
import Button from './components/Button/Button';
import Headline from './components/Headline/Headline';
import ImageItem from './components/ImageItem/ImageItem';
import Paragraph from './components/Paragraph/Paragraph';
import './Frame.scss';

import block from '../../assets/block.png';

const Frame: React.FC = () => {
  return (
    <div className="frame">
      <div className="frame__list">
        <div className="frame__item">
          <ImageItem image={block} />
        </div>
        <div className="frame__item">
          <Headline>A legendary cap set that feels like new</Headline>
        </div>
        <div className="frame__item">
          <Paragraph>
            Prompt your customer to revisit your store by showing them the products they left
            behind. Consider offering them a coupon code to close the deal. Using the "Insert" panel
            on the right, drag and drop the Abandoned Cart element onto the page below.
          </Paragraph>
        </div>
        <div className="frame__item">
          <Button>Register now</Button>
        </div>
      </div>
    </div>
  );
};

export default Frame;
