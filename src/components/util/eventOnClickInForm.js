import { filterTask } from '../modules/filter-task';

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
    case 'filter':
      if (clickFilter) {
        setClickFilter(false);
        setRefreshFlag(!refreshFlag);
      } else {
        setClickFilter(true);
        filterTask(tasks, setTasks);
        console.log(tasks);
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
