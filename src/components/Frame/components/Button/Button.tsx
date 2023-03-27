import React from 'react';

import './Button.scss';

interface ButtonType {
  children: string;
}

const Button: React.FC<ButtonType> = ({ children }) => {
  return (
    <button className="button">
      {children ? <div className="button__text">{children}</div> : <div>Ви ще не ввели вміст!</div>}
    </button>
  );
};

export default Button;
