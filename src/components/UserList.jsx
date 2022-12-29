import { useEffect } from 'react';


export default function UserList({ users, getUsers }){
  useEffect(() => {
    //async로 function만들어서 await사용할 수 있도록
    
    getUsers();
    //↓쉽게 바뀌지 않도록 잘 처리해서 만들어야 함
  },[getUsers]);

  if(users.length === 0){
    return <p>현재 유저 정보 없음</p>;
  }

  return (
    <ul>
      {users.map((user) => 
        <li key={user.id}>{user.login}</li>
      )}
    </ul>
  )
}