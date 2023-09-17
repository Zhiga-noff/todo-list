import { TODOS_URL } from '../App';

export const requestAddTask = async (value, dispatch) => {
  try {
    const response = await fetch(TODOS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: value,
      }),
    });
    dispatch({ type: 'REFRESH' });
  } catch (error) {
    console.error(error);
  }
};

export const requestEditTask = async (value, taskId) => {
  try {
    const response = await fetch(`${TODOS_URL}/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: value,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const requestSearchTask = (value, taskList, dispatch) => {
  const foundTasks = [];
  taskList.forEach((item) => {
    if (item.title.includes(value)) {
      foundTasks.push(item);
    }
    dispatch({ type: 'RENDER_LIST', payload: foundTasks });
  });
};
