import { connect } from 'react-redux';
import useReduxState from '../hooks/useReduxState'

//1) react-redux없이 redux를 react에 연결하는 법
// export default function TodoList(){
//   const state = useReduxState();
//   console.log(state);

//   return (
//     <ul>{state.todos.map((todo)=>{
//       return <li>{todo.text}</li>
//     })}</ul>
//   )
// }


//2) react-redux 연결
//(<->TodoListContainer.jsx)
export default function TodoList({ todos }){
  return (
    <ul>
      {todos.map((todo)=>{
        return <li>{todo.text}</li>
      })}
    </ul>
  );
}

