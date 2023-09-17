import { TODOS_URL } from '../../App';

const fetchRequestTask = async (taskId) => {
  const response = await fetch(`${TODOS_URL}/${taskId}`);
  return await response.json();
};

export const renderRequestTaskActions = (taskId) => (dispatch) => {
  fetchRequestTask(taskId)
    .then((result) =>
      dispatch({
        type: 'RENDER_LIST',
        payload: [result],
      }),
    )
    .catch((e) => {
      console.error(e);
    })
    .finally(() => dispatch({ type: 'OFF_LOADING' }));
};
