import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from './actions';


// state
// ['코딩', '점심먹기'];
// [{text: '코딩', done: false}, {text: '점심먹기', done: false}]
// {todos: [{text: '코딩', done: false}, {text: '점심먹기', done: false}], filter: 'ALL'}
const initialState = {todos: [], filter: 'ALL'};


//[{text: '코딩', done: false}, {text: '점심먹기', done: false}]
const todosInitialState = initialState.todos;
const filterInitialState = initialState.filter;

//각각의 reducer에는 각각의 initialState가 들어가야 한다
function todosReducer(previousState = todosInitialState, action){
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



function filterReducer(previousState = filterInitialState, action){
  //filter에 관련
  if(action.type === SHOW_COMPLETE){
    return 'COMPLETE';
  }
  if(action.type === SHOW_ALL){
    return 'ALL';
  }
  return previousState;
}