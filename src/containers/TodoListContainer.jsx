import { connect, useSelector } from 'react-redux';
import TodoList from '../components/TodoList';

//state를 받아 props객체로 return
// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     //todos를 변경할 때 사용하는 함수를 만들어서 넣어준다

//   };
// };

//connect함수를 실행한 결과가 함수고, 그 함수를 실행한 결과가
//container 이다.
//connect(config)(TodoList);
// const TodoListContainer = connect(
//   //1)store에 state를 받아서 어떤 props에 넣어줄것이냐
//   //2)state에 dispatch 할 수 있는 함수를 props로 넣어주는 함수
//   mapStateToProps,
//   mapDispatchToProps,
// )(TodoList);


//hoc를 hook으로 작성해보기
function TodoListContainer(){
  //hook을 이용해 하위컴포넌트로 props로 보내준다
  const todos = useSelector((state) => state.todos);
  return <TodoList todos={todos}/>;
}

export default TodoListContainer;