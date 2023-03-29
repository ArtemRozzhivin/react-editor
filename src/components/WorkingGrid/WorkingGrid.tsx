import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPattern } from '../../redux/Pattern/select';
import { addItem, setIsActive } from '../../redux/Pattern/slice';
import { ItemType } from '../../redux/Pattern/types';
import { useAppDispatch } from '../../redux/store';
import WorkingItem from '../WorkingItem/WorkingItem';
import './WorkingGrid.scss';

const WorkingGrid: React.FC = () => {
  const [isOverActive, setIsOverActive] = useState(false);
  const dispatch = useAppDispatch();
  const { pattern, isActiveItem } = useSelector(selectPattern);

  const handleDocumentClick = (event: any) => {
    const clickedItem = (event.target as HTMLElement).closest('.item');
    if (!clickedItem) {
      dispatch(setIsActive(''));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const setIsActiveItem = (value: string) => {
    dispatch(setIsActive(value));
  };

  const onDropItem = (e: React.DragEvent<HTMLDivElement>) => {
    const item = JSON.parse(e.dataTransfer.getData('item'));
    dispatch(addItem(item));
    setIsOverActive(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    setIsOverActive(true);
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setIsOverActive(false);
    e.preventDefault();
  };

  return (
    <div
      onClick={handleDocumentClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(e) => onDropItem(e)}
      className={isOverActive ? 'working working-active' : 'working'}>
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
          <div className="working__empty">Template not created</div>
        )}
      </div>
    </div>
  );
};

export default WorkingGrid;
