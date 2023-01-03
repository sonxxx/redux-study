import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import ReduxContext from './contexts/ReduxContext';
import { Provider } from 'react-redux';

//store의 상태가 변경되면 여기 함수가 호출된다
// store.subscribe(()=>{
//   console.log(store.getState());
// });

// console.log(store);
// console.log(store.getState());
// store.dispatch(addTodo("할일"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //1) react-redux없이 redux를 react에 연결하는 법
  // <React.StrictMode>
  //   ReduxContext는 Provider를 사용할 경우, props로 value만 넣어줄 수 있음
  //   <ReduxContext.Provider value={store}>
  //     <App />
  //   </ReduxContext.Provider>
  // </React.StrictMode>


  //2) react-redux 연결
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
