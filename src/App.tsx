import React, { useState } from "react";
import "./App.css";
import CheatSheet from "./components/CheatSheet";
//asを使用することで別名で使用可能（名前の衝突を避ける）
import { CheatSheetItem as CheatSheetItemType } from "./type";
import { initialCheatSheetData } from "./data/cheatsheetData";
const App: React.FC = () => {

  // const [state, setState] = useState<Type>(initialValue);
  // initialValue: 状態の初期値（ここでは initialCheatSheetData）
  // useState は <CheatSheetItemType[]> 型を指定しているので、
  // 状態（CheatSheet）は CheatSheetItemType の配列として管理
  const [CheatSheets, setCheatSheet] = useState<CheatSheetItemType[]>(
    initialCheatSheetData
  );

  return (
    <div className="App">
      {/* タイトル表示 */}
      <div className="title">
        <h1>React+TypeScript チートシート</h1>
      </div>

      {/* チートシート表示部 */}
      <div className="main">
        {/* チートデータ配列をmapで繰り返す */}
        {CheatSheets.map((item)=>(
          <CheatSheet key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
