const initialState = false;

export const refreshReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'REFRESH':
      return !state;
    default:
      return state;
  }
};
