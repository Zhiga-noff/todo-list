import { useDispatch } from 'react-redux';

export const filterTask = (taskList, dispatch) => {
  const sortResult = taskList.sort(({ title: titleOne }, { title: titleTwo }) => {
    if (titleOne > titleTwo) {
      return 1;
    }
    if (titleOne === titleTwo) {
      return 0;
    }
    if (titleOne < titleTwo) {
      return -1;
    }
  });

  dispatch({ type: 'SORT', payload: sortResult });
};
