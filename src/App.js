import logo from './logo.svg';
import './App.css';
import { addTodo } from './redux/actions';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/* <TodoList />
          <TodoForm /> */}
          <TodoListContainer />
          <TodoFormContainer />
      </header>
    </div>
  );
}


export default App;

