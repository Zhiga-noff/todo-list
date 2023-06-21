import { TODOS_URL } from '../../App';

export async function createNewTask(setTasks, setIsLoading) {
  try {
    const response = await fetch(TODOS_URL);
    const result = await response.json();
    setTasks(result);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
  }
}
