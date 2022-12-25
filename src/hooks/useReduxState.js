import { useContext, useEffect, useState } from 'react';
import ReduxContext from '../contexts/ReduxContext';

export default function useReduxState(){
  //Context로부터 store를 받아온다
  const store = useContext(ReduxContext);

  const [state, setState] = useState(store.getState());
  //props로 받아온 store가 다른 store로 바뀌었을때
  //useEffect 다시 실행
  useEffect(()=>{
    const unsubscribe = store.subscribe(()=>{
      //전체적으로 사용해볼 state
      setState(store.getState());
    })
    return () => {
      unsubscribe();
    };
  },[store]);

  return state;
}