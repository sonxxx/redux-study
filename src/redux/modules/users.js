import axios from 'axios';
import { call, delay, put, takeEvery } from 'redux-saga/effects';

//action 타입 정의

//users에 대한 action 정의 타입
//깃헙 API 호출 시작하는 것 의미
export const GET_USERS_START = 'redux-start/users/GET_USERS_START';  
//API호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS';
//API호출에 대한 응답이 실패한 경우
export const GET_USERS_FAIL = 'redux-start/users/GET_USERS_FAIL';

// redux-promise-middleware
const GET_USERS = 'redux-start/users/GET_USERS';

export const GET_USERS_PENDING = 'redux-start/users/GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'redux-start/users/GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'redux-start/users/GET_USERS_REJECTED';


//action 생성 함수
export function getUsersStart(){
  return {
    type: GET_USERS_START
  }
}
export function getUsersSuccess(data){
  return {
    type: GET_USERS_SUCCESS,
    data
  }
}
export function getUsersFail(error){
  return {
    type: GET_USERS_FAIL,
    error
  }
}


//초기값
const initialState = {
  loading: false,
  data: [],
  error: null
};

//reducer
export default function reducer(state = initialState, action){
  if(action.type === GET_USERS_START || action.type === GET_USERS_PENDING){
    return {
      ...state,
      loading: true,
      error: null
    };
  }
  if(action.type === GET_USERS_SUCCESS){
    return {
      ...state,
      loading: false,
      data: action.data
    };
  }
  if(action.type === GET_USERS_FULFILLED){
    return {
      ...state,
      loading: false,
      data: action.payload
    };
  }
  if(action.type === GET_USERS_FAIL){
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  if(action.type === GET_USERS_REJECTED){
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  }

  return state;
}

function sleep(ms){
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve();
    },ms)
  })
}

// redux-thunk
//UserListContainer.jsx의 getUsers 함수를 
//action생성함수로 바꾸고 함수를 return하는 방식
export function getUsersThunk(){
  return async (dispatch, getState, {history}) => {
    try {
      console.log(history);
      dispatch(getUsersStart());
      //sleep
      await sleep(2000);

      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));

      //끝난후에 페이지 이동 처리
      //history.push('/');
    } catch (error) {
      dispatch(getUsersFail(error)); 
    }
  }
}

// redux-promise-middleware
export function getUsersPromise(){
  return {
    type: GET_USERS,
    //이부분에 promise 함수 작성
    //payload로 promise를 지정해주면 들어온 type을 변조해서 dispatch하는 성질 있다
    //promise 객체 생성된 직후에 pending 상태 돌입 -> 정상 완료되면 fulfilled 상태 -> 문제생기면 reject 상태 됨
    //각 상태에 따라 promise 미들웨어가 action type을 생성해준다
    payload: async () => {
      const res = await axios.get('https://api.github.com/users');
      return res.data;
    }
  }
}

// redux-saga
const GET_USERS_SAGA_START = 'GET_USERS_SAGA_START';

function* getUsersSaga(action){
  try {
    yield put(getUsersStart());
    //sleep
    yield delay(2000);
    const res = yield call(axios.get, 'https://api.github.com/users');
    yield put(getUsersSuccess(res.data));
  } catch (error) {
    yield put(getUsersFail(error)); 
  }
}

export function getUsersSagaStart(){
  return {
    type: GET_USERS_SAGA_START
  } 
}

// saga 함수를 등록
export function* usersSaga(){
  //어떤 action 타입에 의해서, 어떤 saga함수가 실행될지
  yield takeEvery(GET_USERS_SAGA_START, getUsersSaga);
}