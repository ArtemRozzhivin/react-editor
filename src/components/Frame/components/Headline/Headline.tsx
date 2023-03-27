import React from 'react';
import './Headline.scss';

interface HeadlineType {
  children: string;
}

const Headline: React.FC<HeadlineType> = ({ children }) => {
  return (
    <div className="headline">
      {children ? <div>{children}</div> : <div>Ви ще не ввели вміст!</div>}
    </div>
  );
};

export default Headline;
