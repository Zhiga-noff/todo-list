import { TODOS_URL } from '../../App';

export const requestAddTask = async (value, refreshFlag, setRefreshFlag) => {
  try {
    const response = await fetch(TODOS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: value,
      }),
    });
    const result = await response.json();
    setRefreshFlag(!refreshFlag);
  } catch (error) {
    console.error(error);
  }
};

export const requestUpdateTask = async (value, refreshFlag, setRefreshFlag, taskId) => {
  const response = await fetch(`${TODOS_URL}/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      title: value,
    }),
  });
  const result = await response.json();
  setRefreshFlag(!refreshFlag);
};
