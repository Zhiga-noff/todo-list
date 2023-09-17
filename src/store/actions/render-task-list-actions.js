import { TODOS_URL } from '../../App';

const fetchTaskList = async () => {
  const response = await fetch(TODOS_URL);
  return await response.json();
};

export const renderTaskListActions = (dispatch) =>
  fetchTaskList()
    .then((result) =>
      dispatch({
        type: 'RENDER_LIST',
        payload: result,
      }),
    )
    .catch((e) => {
      console.error(e);
    })
    .finally(() => dispatch({ type: 'OFF_LOADING' }));
