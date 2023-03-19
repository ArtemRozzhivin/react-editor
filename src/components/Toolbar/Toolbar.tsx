import React from 'react';
import BlockItem from '../BlockItem/BlockItem';
import './Toolbar.scss';

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <div className="toolbar__list">
        <div className="toolbar__item">
          <BlockItem />
        </div>
        <div className="toolbar__item">
          <BlockItem />
        </div>
        <div className="toolbar__item">
          <BlockItem />
        </div>
        <div className="toolbar__item">
          <BlockItem />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
