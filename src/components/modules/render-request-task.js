import { TODOS_URL } from '../../App';

export const renderRequestTask = async (taskId, setTaskActive, setIsLoading) => {
  let foundTaskActive = [];
  try {
    const response = await fetch(TODOS_URL);
    const result = await response.json();

    result.forEach((item) => {
      if (item.id === Number(taskId)) {
        foundTaskActive.push(item);
      }
    });
    setIsLoading(false);
    setTaskActive(foundTaskActive);
  } catch (error) {
    console.error('ошибка');
  }
};
