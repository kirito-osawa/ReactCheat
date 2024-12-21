import React from 'react'
import { CheatSheetItem } from '../type';

interface CheatSheetItemProps {
  //受け取るpropsの型定義
  item: CheatSheetItem;
}

const CheatSheet: React.FC<CheatSheetItemProps> = ({ item }) => {
  return (
    <div className="cheat-sheet-item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <pre>{item.code}</pre>
    </div>
  );
};

export default CheatSheet