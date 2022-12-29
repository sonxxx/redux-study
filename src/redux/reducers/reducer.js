import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import users from './users';

//하위 리듀서를 합쳐 대표 리듀서를 만든다
const reducer = combineReducers({
  //reducer를 각각의 property로 지정해서 세팅
  todos: todos,
  filter: filter,
  users: users,
});
export default reducer;
