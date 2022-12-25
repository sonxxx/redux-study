import { useRef } from 'react';
import { connect } from 'react-redux';
import useReduxDispatch from '../hooks/useReduxDispatch';
import { addTodo } from '../redux/actions';

//1) react-redux없이 redux를 react에 연결하는 법
// export default function TodoForm(){
//   const inputRef = useRef();
//   const dispatch = useReduxDispatch();

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={click}>할일 추가</button>
//     </div>
//   );

//   function click(){
//     dispatch(addTodo(inputRef.current.value));
//   }
// }


//2) react-redux 연결
//presentational component or component라 한다
//컨테이너가 주는 데이터나 함수를 받아서 보여주거나 함수를 실행하는 역할 (<->TodoFormContainer.jsx)
export default function TodoForm({ add }){
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>할일 추가</button>
    </div>
  );

  function click(){
    add(inputRef.current.value);
  }
}


