import { applyMiddleware, createStore } from 'redux';
import todoApp from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { history } from '../history';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './modules/rootSaga';

// function middleware1(store){
//   console.log('middleware1', 0);

//   //next: 다음 미들웨어 지칭
//   return (next) => {
//     console.log('middleware1', 1, next);
//     return action => {
//       console.log('middleware1', 2);
//       const returnValue = next(action);
//       console.log('middleware1', 3);
//       return returnValue;
//     }
//   };
// }


// function middleware2(store){
//   console.log('middleware2', 0);
//   return (next) => {
//     console.log('middleware2', 1, next);
//     return action => {
//       console.log('middleware2', 2);
//       const returnValue = next(action);
//       console.log('middleware2', 3);
//       return returnValue;
//     }
//   };
// }

//saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoApp,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ history }),
      promise,
      sagaMiddleware
    )
  )
);

//saga 미들웨어 설정
sagaMiddleware.run(rootSaga);

export default store;
