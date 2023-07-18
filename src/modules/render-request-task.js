import { TODOS_URL } from '../App';

export const renderRequestTask = async (taskId, dispatchTaskList, dispatchIsLoading) => {
  try {
    const response = await fetch(`${TODOS_URL}/${taskId}`);
    const result = await response.json();

    dispatchTaskList({ type: 'SET_UPDATE_TASK_LIST', payload: [result] });
    dispatchIsLoading({ type: 'SET_IS_LOADING', payload: false });
  } catch (error) {
    console.error('ошибка');
  }
};
