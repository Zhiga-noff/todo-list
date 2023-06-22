import { TODOS_URL } from '../../App';

export const requestAddTask = async (value, refreshAllRequests) => {
  try {
    const response = await fetch(TODOS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: value,
      }),
    });
    const result = await response.json();
    refreshAllRequests();
  } catch (error) {
    console.error(error);
  }
};
