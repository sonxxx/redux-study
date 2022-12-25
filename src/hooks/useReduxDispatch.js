import { useContext } from 'react';
import ReduxContext from '../contexts/ReduxContext';

//dispatch를 가져오는 hook
export default function useReduxDispatch(){
  const store = useContext(ReduxContext);
  return store.dispatch;
}