import { TODOS_URL } from '../App';

export const renderRequestTask = async (taskId, dispatchTaskList, setIsLoading) => {
  try {
    const response = await fetch(`${TODOS_URL}/${taskId}`);
    const result = await response.json();

    dispatchTaskList({ type: 'SET_UPDATE_TASK_LIST', payload: [result] });
    setIsLoading(false);
  } catch (error) {
    console.error('ошибка');
  }
};
