const initialState = [];

export const taskListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'RENDER_LIST':
      return payload;
    // case 'SORT':
    //   return state.sort(({ title: titleOne }, { title: titleTwo }) => {
    //     if (titleOne > titleTwo) {
    //       return 1;
    //     }
    //     if (titleOne === titleTwo) {
    //       return 0;
    //     }
    //     if (titleOne < titleTwo) {
    //       return -1;
    //     }
    //   });
    default:
      return state;
  }
};
