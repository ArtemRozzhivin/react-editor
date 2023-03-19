import React from 'react';
import WorkingItem from '../WorkingItem/WorkingItem';
import './WorkingGrid.scss';

const WorkingGrid: React.FC = () => {
  return (
    <div className="working">
      <div className="working__list">
        <div className="working__item">
          <WorkingItem />
        </div>
        <div className="working__item">
          <WorkingItem />
        </div>
        <div className="working__item">
          <WorkingItem />
        </div>
        <div className="working__item">
          <WorkingItem />
        </div>
      </div>
    </div>
  );
};

export default WorkingGrid;
