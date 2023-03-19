import React from 'react';
import './Paragraph.scss';

interface ParagraphType {
  children: string;
}

const Paragraph: React.FC<ParagraphType> = ({ children }) => {
  return <div className="paragraph">{children}</div>;
};

export default Paragraph;
