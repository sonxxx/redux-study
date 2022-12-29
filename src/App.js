import './App.css';
import { addTodo } from './redux/actions';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import UserListContainer from './containers/UserListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <UserListContainer />
          {/* <TodoList />
          <TodoForm /> */}
          <TodoListContainer />
          <TodoFormContainer />
      </header>
    </div>
  );
}


export default App;

