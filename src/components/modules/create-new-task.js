import { TODOS_URL } from '../../App';

export async function createNewTask(setInfoAboutTask, setIsLoading) {
  try {
    const response = await fetch(TODOS_URL);
    const result = await response.json();
    setInfoAboutTask((pre) => ({
      ...pre,
      tasksList: result,
    }));
    setIsLoading(false);
  } catch (error) {
    console.error(error);
  }
}
