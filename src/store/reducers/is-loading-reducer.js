const initialState = false;

export const isLoadingReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'ON_LOADING':
      return true;
    case 'OFF_LOADING':
      return false;
    default:
      return state;
  }
};
