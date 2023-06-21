import { deleteTask } from './delete-task';
import { editTask } from './edit-task';
import { filterTask } from './filter-task';
import { searchTask } from './search-task';

export const eventOnClick = (
  tasks,
  setTasks,
  eventClick,
  itemId,
  setIsEditTask,
  setValue,
  setTaskId,
  inputRef,
  refreshFlag,
  setRefreshFlag,
  clickFilter,
  setClickFilter,
) => {
  switch (eventClick) {
    case 'DELETE':
      setTasks([0]);
      deleteTask(refreshFlag, setRefreshFlag, itemId);
      break;
    case 'PUT':
      editTask(
        refreshFlag,
        setRefreshFlag,
        itemId,
        setIsEditTask,
        setValue,
        setTaskId,
        inputRef,
      );
      break;
    case 'filter':
      if (clickFilter) {
        setRefreshFlag(!refreshFlag);
        setClickFilter(false);
      } else {
        setClickFilter(true);
        setTasks(filterTask(tasks));
        setRefreshFlag(!refreshFlag);
      }
      break;
    case 'search':
      searchTask();
  }
};
