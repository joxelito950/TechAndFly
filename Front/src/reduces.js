import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const allReducers = require.context('./', true, /reducer\.js$/);

const reducers = {};

allReducers.keys().forEach(path => {
  const name = path.split('/')[2];
  const thisRedux = allReducers(path);
  reducers[name] = thisRedux.default;
});

reducers.form = reduxFormReducer;

// Combinar reducer
export default combineReducers(reducers);
