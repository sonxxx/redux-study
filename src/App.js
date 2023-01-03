import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import UserListContainer from './containers/UserListContainer';
import { BrowserRouter, Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import { history } from './history';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //       <UserListContainer />
    //       {/* <TodoList />
    //       <TodoForm /> */}
    //       <TodoListContainer />
    //       <TodoFormContainer />
    //   </header>
    // </div>
    <BrowserRouter history={history}>
      <Routes>
        <Route exact={true} path='/' element={ <Home/> }/>
        <Route path='/todos' element={ <Todos/> }/>
        <Route path='/users' element={ <Users/> }/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;

