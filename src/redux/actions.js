import axios from 'axios';


export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

//'ADD_TODO' type을 이용하는 action생성함수
// addTodo액션생성자를 통해 나오는 action은 아래와 같다
// {type: ADD_TODO, text: '할일내용'}
export function addTodo(text){
  return {
    type: ADD_TODO,
    todo: text,
  };
}

// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index){
  return {
    type: COMPLETE_TODO,
    index: index
  };
}


export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export function showAll(){
  return {
    type: SHOW_ALL
  };
}

export function showComplete(){
  return {
    type: SHOW_COMPLETE
  };
}


//users에 대한 action 정의 타입
//깃헙 API 호출 시작하는 것 의미
export const GET_USERS_START = 'GET_USERS_START';  
//API호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
//API호출에 대한 응답이 실패한 경우
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

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

//UserListContainer.jsx의 getUsers 함수를 
//action생성함수로 바꾸고 함수를 return하는 방식
export function getUsersThunk(){
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error)); 
    }
  }
}



const GET_USERS = 'GET_USERS';
export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

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