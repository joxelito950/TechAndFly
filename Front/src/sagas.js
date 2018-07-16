import { takeLatest } from 'redux-saga/effects';
import sagaFindRepoByUsernameEvent, {
  TYPE_EVENT
} from './events/FindRepoByUsernameEvent';

export default function* rootSaga() {
  yield takeLatest(TYPE_EVENT, sagaFindRepoByUsernameEvent);
}
