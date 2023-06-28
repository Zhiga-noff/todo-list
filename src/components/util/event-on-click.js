import { deleteTask } from '../modules/delete-task';
import { editTask } from '../modules/edit-task';
import { filterTask } from '../modules/filter-task';
import { searchTasks } from '../modules/search-tasks';

export const eventOnClick = (eventClick, itemId, infoAboutTask, setInfoAboutTask) => {
  switch (eventClick) {
    case 'DELETE':
      deleteTask(itemId);
      break;
    case 'PUT':
      editTask(itemId, infoAboutTask, setInfoAboutTask);
      break;
    case 'filter':
      filterTask(setInfoAboutTask);
      break;
    case 'search':
      searchTasks();
      break;
  }
};
