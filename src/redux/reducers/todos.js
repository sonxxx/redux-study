import { ADD_TODO, COMPLETE_TODO } from '../actions';

//각각의 reducer에는 각각의 initialState가 들어가야 한다
const initialState = [];

export default function todos(previousState = initialState, action){
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