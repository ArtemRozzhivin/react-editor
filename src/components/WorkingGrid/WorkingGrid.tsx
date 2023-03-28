import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPattern } from '../../redux/Pattern/select';
import WorkingItem from '../WorkingItem/WorkingItem';
import './WorkingGrid.scss';

const WorkingGrid: React.FC = () => {
  const { pattern } = useSelector(selectPattern);
  const [isActiveItem, setIsActiveItem] = useState('');

  useEffect(() => {
    if (pattern.length) {
      setIsActiveItem(pattern[pattern.length - 1].id);
    }
  }, [pattern]);

  return (
    <div className="working">
      <div className="working__list">
        {pattern.length ? (
          pattern.map((item) => (
            <div key={item.id} className="working__item">
              <WorkingItem
                isActive={isActiveItem}
                setIsActive={(value: string) => setIsActiveItem(value)}
                {...item}
              />
            </div>
          ))
        ) : (
          <div className="working__empty">Шаблон не створено</div>
        )}
      </div>
    </div>
  );
};

export default WorkingGrid;
