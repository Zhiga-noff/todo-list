import { TODOS_URL } from '../../App';

export const editTask = async (refreshFlag, setRefreshFlag, itemId, setIsEditTask, setValue, setTaskId, inputRef) => {
  try {
    const responseTask = await fetch(`${TODOS_URL}/${itemId}`, {});
    const result = await responseTask.json();
    setTaskId(itemId);
    setValue(result.title);
    setIsEditTask(true);
    inputRef.current.focus();
  } catch (error) {
    console.error(error);
  }
};
