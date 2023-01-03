//action 타입 정의
// 프로젝트 이름/reducer이름/
const SHOW_ALL = 'redux-start/filter/SHOW_ALL';
const SHOW_COMPLETE = 'redux-start/filter/SHOW_COMPLETE';

//action 생성 함수
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

//초기값
const initialState = 'ALL';

//reducer
export default function reducer(previousState = initialState, action){
  if(action.type === SHOW_COMPLETE){
    return 'COMPLETE';
  }
  if(action.type === SHOW_ALL){
    return 'ALL';
  }
  return previousState;
}