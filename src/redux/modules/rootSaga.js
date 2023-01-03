import { all } from 'axios';
import { usersSaga } from './users';

export default function* rootSaga(){
  yield all([usersSaga()]);
}