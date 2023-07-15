import { filterTask } from '../modules/filter-task';
import { searchTasks } from '../modules/search-tasks';

export const eventOnClick = (eventClick, itemId, infoAboutTask, setInfoAboutTask) => {
  switch (eventClick) {
    case 'filter':
      filterTask(infoAboutTask, setInfoAboutTask);
      break;
    case 'search':
      searchTasks(infoAboutTask, setInfoAboutTask);
      break;
  }
};
