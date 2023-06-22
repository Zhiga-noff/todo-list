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

export const requestEditTask = async (value, refreshAllRequests, infoAboutTask) => {
  const { id: taskId } = infoAboutTask;
  console.log(taskId);
  const response = await fetch(`${TODOS_URL}/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      title: value,
    }),
  });
  refreshAllRequests();
};
