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