import { CheatSheetItem } from '../type';

// 初期データ
export const initialCheatSheetData: CheatSheetItem[] = [
  {
    title: 'useState',
    description: 'Reactの状態管理フック',
    code: `const [state, setState] = useState<number>(0);`,
  },
  {
    title: 'useEffect',
    description: '副作用を扱うReactフック',
    code: `useEffect(() => { document.title = 'Hello'; }, []);`,
  },
  {
    title: 'Props型定義',
    description: 'Propsの型定義方法',
    code: `interface MyComponentProps { name: string; }`,
  },
];