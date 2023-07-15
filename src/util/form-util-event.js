import { TODOS_URL } from '../App';

export const requestAddTask = async (value, refreshAllRequests) => {
  try {
    const response = await fetch(TODOS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: value,
      }),
    });
    refreshAllRequests();
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

export const requestSearchTask = (value, infoAboutTask, setInfoAboutTask) => {
  const { tasksList } = infoAboutTask;
  const foundTask = [];
  tasksList.forEach((item) => {
    if (item.title.includes(value)) {
      foundTask.push(item);
    }
  });

  setInfoAboutTask((pre) => ({ ...pre, tasksList: foundTask }));
};