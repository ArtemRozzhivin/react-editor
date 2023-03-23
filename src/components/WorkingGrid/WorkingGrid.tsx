import React from 'react';
import { useSelector } from 'react-redux';
import { selectPattern } from '../../redux/Pattern/select';
import WorkingItem from '../WorkingItem/WorkingItem';
import './WorkingGrid.scss';

const WorkingGrid: React.FC = () => {
  const { pattern } = useSelector(selectPattern);

  return (
    <div className="working">
      <div className="working__list">
        {pattern.length ? (
          pattern.map((item) => (
            <div className="working__item">
              <WorkingItem {...item} />
            </div>
          ))
        ) : (
          <div>Шаблон не створено</div>
        )}
      </div>
    </div>
  );
};

export default WorkingGrid;
