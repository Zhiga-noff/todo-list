import { TODOS_URL } from '../../App';

const validateTask = /^[\w_]*$/;

export const validateTaskField = (value) => {
  if (!validateTask.test(value) || value === '') {
    console.error('ошибка');
    return false;
  }
  return true;
};

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
