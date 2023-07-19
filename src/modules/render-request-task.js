import { TODOS_URL } from '../App';

export const renderRequestTask = async (taskId, setTaskList, setIsLoading) => {
  try {
    const response = await fetch(`${TODOS_URL}/${taskId}`);
    const result = await response.json();

    setTaskList([result]);
    setIsLoading(false);
  } catch (error) {
    console.error('ошибка');
  }
};
