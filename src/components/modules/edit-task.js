import { TODOS_URL } from '../../App';

export const editTask = async (tasks, itemId, setIsEditTask, setValue, setTaskId, inputRef) => {
  setTaskId(itemId);
  setValue(tasks[itemId].title);
  setIsEditTask(true);
  inputRef.current.focus();
};
