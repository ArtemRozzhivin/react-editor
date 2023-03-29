import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPattern } from '../../redux/Pattern/select';
import { setIsActive } from '../../redux/Pattern/slice';
import { ItemType } from '../../redux/Pattern/types';
import { useAppDispatch } from '../../redux/store';
import WorkingItem from '../WorkingItem/WorkingItem';
import './WorkingGrid.scss';

const WorkingGrid: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pattern, isActiveItem } = useSelector(selectPattern);

  const setIsActiveItem = (value: string) => {
    dispatch(setIsActive(value));
  };

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
