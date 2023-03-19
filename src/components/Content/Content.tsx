import React from 'react';
import Frame from '../Frame/Frame';
import WorkingGrid from '../WorkingGrid/WorkingGrid';
import './Content.scss';

const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="content__item">
        <WorkingGrid />
      </div>
      <div className="content__item">
        <Frame />
      </div>
    </div>
  );
};

export default Content;
