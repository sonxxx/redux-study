import { useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../redux/modules/todos';

//'컨테이너' or '스마트한 컴포넌트'라 한다
//store와 presentational component를 이어주는 역할
// const TodoFormContainer = connect(
//   //필요한 props 없기 때문에 빈 객체
//   (state) => ({}),
//   (dispatch) => ({
//     //todo를 추가할 수 있는 dispatch를 실행하는 로직(함수)
//     add: (text) => {
//       //action생성자 함수↓
//       dispatch(addTodo(text));
//     }
//   })
// )(TodoForm);


//hoc를 hook으로 작성해보기
function TodoFormContainer(){
  const dispatch = useDispatch();
  const add = useCallback((text) => {
    dispatch(addTodo(text));
  },[dispatch]);

  return <TodoForm add={add}/>;
}

export default TodoFormContainer;