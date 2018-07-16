import reduxHelper from '../../utils/reduxHelper';
import { REPO_FIENDED } from '../../events/FindRepoByUsernameEvent';
import { REQUEST_START, REQUEST_SUCCESS } from '../../utils/sagaHelper';

const reduxUtil = reduxHelper('SearchRepo');

const initialState = {
  repos: [],
  loading: false
};

// Crear el reducer segun la accion
const reducer = reduxUtil.createReducer(
  {
    [REPO_FIENDED](state, action) {
      const newState = { ...state, repos: action.repos };
      return newState;
    },
    [REQUEST_START](state) {
      const newState = { ...state, loading: true };
      return newState;
    },
    [REQUEST_SUCCESS](state) {
      const newState = { ...state, loading: false };
      return newState;
    }
  },
  initialState
);

export default reducer;
