import { TODOS_URL } from '../App';

export const renderRequestTask = async (taskId, setTaskActive, setIsLoading) => {
  try {
    const response = await fetch(`${TODOS_URL}/${taskId}`);
    const result = await response.json();

    setTaskActive(result);
    setIsLoading(false);
  } catch (error) {
    console.error('ошибка');
  }
};
