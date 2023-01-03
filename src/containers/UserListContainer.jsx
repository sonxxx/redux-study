import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../components/UserList'
import { getUsersThunk, getUsersPromise, getUsersSagaStart } from '../redux/modules/users';

export default function UserListContainer(){
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  //dispatch받아와서 수행해야 함
  // const start = useCallback(() => {
  //   dispatch(getUsersStart());
  //   //dispatch를 의존성으로 추가함
  // },[dispatch]);

  // const success = useCallback((data) => {
  //   dispatch(getUsersSuccess(data));
  // },[dispatch]);
  
  // const fail = useCallback((error) => {
  //   dispatch(getUsersFail(error));
  // },[dispatch]);



  //원래 UserList.jsx에서 비동기로 각각 써준 코드
  // const getUsers = useCallback(async () => {
  //     try {
  //       dispatch(getUsersStart());
  //       const res = await axios.get('https://api.github.com/users');
  //       dispatch(getUsersSuccess(res.data));
  //     } catch (error) {
  //       dispatch(getUsersFail(error)); 
  //     }
  // },[dispatch]);



  // const getUsers = useCallback(() => {
  //   dispatch(getUsersThunk());
  // },[dispatch]);
  const getUsers = useCallback(() => {
    dispatch(getUsersSagaStart());
  },[dispatch]);
  // const getUsers = useCallback(() => {
  //   dispatch(getUsersPromise());
  // },[dispatch]);
  
  return <UserList users={users} getUsers={getUsers}/>;
}