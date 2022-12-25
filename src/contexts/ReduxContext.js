import { createContext } from 'react';

//store를 전체 컴포넌트에 전달할 수 있는 Context
//가장 상위에서 Context를 Provider로 만든 후,
//value로 store를 주입 (App.js파일 참고)
const ReduxContext = createContext();

export default ReduxContext;