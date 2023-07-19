import { TODOS_URL } from '../App';

export async function renderTaskList(setTaskList, setIsLoading) {
  try {
    const response = await fetch(TODOS_URL);
    const result = await response.json();
    setTaskList(result);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
  }
}
