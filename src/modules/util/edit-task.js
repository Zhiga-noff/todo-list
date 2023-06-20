import { TODOS_URL } from '../../App';

export const editTask = async (
  refreshFlag,
  setRefreshFlag,
  id,
  setIsEditTask,
  setValue,
  setTaskId,
  inputRef,
) => {
  try {
    const responseTask = await fetch(`${TODOS_URL}/${id}`, {});
    const result = await responseTask.json();
    setTaskId(id);
    setValue(result.title);
    setIsEditTask(true);
    inputRef.current.focus();
  } catch (error) {
    console.error(error);
  }
};
