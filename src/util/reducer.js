export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_UPDATE_TASK_LIST': {
      return payload;
    }
    case 'SET_IS_LOADING': {
      return payload;
    }
    default:
      return state;
  }
};
