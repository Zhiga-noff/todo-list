import { deleteTask } from '../modules/delete-task';
import { editTask } from '../modules/edit-task';
import { filterTask } from '../modules/filter-task';
import { searchTask } from '../modules/search-task';

export const eventOnClickInForm = (
  tasks,
  setTasks,
  eventClick,
  itemId,
  setIsEditTask,
  value,
  setValue,
  setTaskId,
  inputRef,
  refreshFlag,
  setRefreshFlag,
  clickFilter,
  setClickFilter,
  isSearchTask,
  setIsSearchTask,
) => {
  switch (eventClick) {
    // case 'DELETE':
    //   setTasks([0]);
    //   deleteTask(refreshFlag, setRefreshFlag, itemId);
    //   break;
    // case 'PUT':
    //   editTask(refreshFlag, setRefreshFlag, itemId, setIsEditTask, setValue, setTaskId, inputRef);
    //   break;
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
      if (isSearchTask) {
        setRefreshFlag(!refreshFlag);
        setValue('');
        setIsSearchTask(false);
      } else {
        setIsSearchTask(true);
        setRefreshFlag(!refreshFlag);
      }
      break;
  }
};
