const reduxHelper = (moduleName) => {
  // Helps to standardize and keep actions unique across your application
  const defineAction = (actionName) => `${moduleName}/${actionName}`;

  // Reduces boilerplate
  const createAction = (type) => function actionCreator(payload) {
    return { type, payload: { ...payload } };
  };

  // Reduces boilerplate
  const createReducer = (cases, inputState) => {
    const defaultState = inputState || {};
    return function reducer(state, inputAction) {
      const action = inputAction || {};
      if (state === undefined) {
        return defaultState;
      }
      for (const caseName in cases) {
        if (action.type === caseName) {
          return cases[caseName](state, action);
        }
      }
      return state;
    };
  };

  return {
    defineAction,
    createAction,
    createReducer
  };
};

export default reduxHelper;
