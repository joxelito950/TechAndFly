export default () => ({ dispatch, getState }) => next => (action) => {
    const state = getState();
    switch (action.type) {
      case "@@router/LOCATION_CHANGE":
        window.document.title = "Hola mundo ";
        //dispatch({ type: types.UPDATE_STATE_LOCAL_STORAGE, localStorage: loadLocalStorage() });
        return { ...state };
    }
    return next(action);
  };