import React, { useState } from 'react';
import { ItemType } from '../../redux/Pattern/types';

const WorkingItem: React.FC<ItemType> = ({ type, image }) => {
  const [isActive, setIsActive] = useState(false);

  const onCopy = () => {};

  return (
    <div onClick={() => setIsActive(true)} className={isActive ? 'item item-active' : 'item'}>
      {isActive && (
        <div className="item__panel">
          <div className="item__order">
            <div className="item__down">
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.875 10.6162V0.249992H6.125V10.6162L10.0581 6.68312L10.9419 7.56687L5.5 13.0087L0.0581284 7.56687L0.94188 6.68312L4.875 10.6162Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="item__up">
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.125 3.38376V13.75H4.875V3.38376L0.941871 7.31688L0.0581207 6.43313L5.5 0.991257L10.9419 6.43313L10.0581 7.31688L6.125 3.38376Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className="item__control">
            <div className="item__copy">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 10V12.5C10 13.2202 9.47018 13.75 8.75 13.75H2.5C1.77982 13.75 1.25 13.2202 1.25 12.5V6.25C1.25 5.52982 1.77982 5 2.5 5H5V2.5C5 1.77982 5.52982 1.25 6.25 1.25H12.5C13.2202 1.25 13.75 1.77982 13.75 2.5V8.75C13.75 9.47018 13.2202 10 12.5 10H10ZM8.75 10H6.25C5.52982 10 5 9.47018 5 8.75V6.25H2.5V12.5H8.75V10ZM6.25 2.5V8.75H12.5V2.5H6.25Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="item__delete">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.6563 1.87501H9.84378V0.937503C9.84378 0.419533 9.42423 0 8.90626 0H6.09377C5.5758 0 5.15627 0.419533 5.15627 0.937503V1.87501H2.34378C1.82581 1.87501 1.40628 2.29454 1.40628 2.81251V3.75001C1.40628 4.2675 1.82581 4.68703 2.34284 4.68751H12.6568C13.1743 4.68703 13.5938 4.2675 13.5938 3.75001V2.81249C13.5938 2.29454 13.1742 1.87501 12.6563 1.87501ZM8.90626 1.87501H6.09377V1.40624C6.09377 1.1475 6.30377 0.937483 6.56251 0.937483H8.43752C8.69626 0.937483 8.90626 1.14748 8.90626 1.40624V1.87501ZM2.34376 13.125C2.34376 14.1605 3.18328 15 4.21876 15H10.7813C11.8167 15 12.6563 14.1605 12.6563 13.125V5.62499H2.34376V13.125ZM9.37504 7.03126C9.37504 6.77251 9.58503 6.5625 9.84378 6.5625C10.1025 6.5625 10.3125 6.77249 10.3125 7.03126V12.6563C10.3125 12.915 10.1025 13.125 9.84378 13.125C9.58503 13.125 9.37504 12.915 9.37504 12.6563V7.03126ZM7.03127 7.03126C7.03127 6.77251 7.24127 6.5625 7.50003 6.5625C7.7588 6.5625 7.96877 6.77249 7.96877 7.03126V12.6563C7.96877 12.915 7.75878 13.125 7.50003 13.125C7.24129 13.125 7.03127 12.915 7.03127 12.6563V7.03126ZM4.68751 7.03126C4.68751 6.77251 4.8975 6.5625 5.15627 6.5625C5.41503 6.5625 5.62503 6.77249 5.62503 7.03126V12.6563C5.62503 12.915 5.41503 13.125 5.15627 13.125C4.8975 13.125 4.68751 12.915 4.68751 12.6563V7.03126Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div className="item__img">
        <img src={image} alt="Img" />
      </div>
      <div className="item__title">{type}</div>

      {isActive && (
        <div className="item__edit">
          <input className="item__input" />
        </div>
      )}
    </div>
  );
};

export default WorkingItem;
