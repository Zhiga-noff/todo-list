import { TODOS_URL } from '../App';

export async function renderTaskList(dispatchTaskList, dispatchIsLoading) {
  try {
    const response = await fetch(TODOS_URL);
    const result = await response.json();
    dispatchTaskList({ type: 'SET_UPDATE_TASK_LIST', payload: result });
    dispatchIsLoading({ type: 'SET_IS_LOADING', payload: false });
  } catch (error) {
    console.error(error);
  }
}
