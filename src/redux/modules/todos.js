//action 타입 정의
export const ADD_TODO = 'redux-start/todos/ADD_TODO';
export const COMPLETE_TODO = 'redux-start/todos/COMPLETE_TODO';

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


//초기값
//각각의 reducer에는 각각의 initialState가 들어가야 한다
const initialState = [];

//reducer
export default function reducer(previousState = initialState, action){
  //action을 받았을때만 state를 변경해 리턴해준다(action받지 못했을 시 그대로 previousState를 리턴)

  //초기값을 설정해주는 부분
  // if(previousState === undefined){
  //   return [];
  // }

  //action.index번째에 있는 요소를 얻어서 
  //그 요소의 done을 true로 바꿔줌
  if(action.type === ADD_TODO){
    return [...previousState, {text: action.todo, done: false}]
  }
  if(action.type === COMPLETE_TODO){
    return previousState.map((todo, index)=>{
        if(index === action.index){
          return {...todo, done: true};
        }
        return todo;
      })
  }
  return previousState;
}