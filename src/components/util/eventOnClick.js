import { deleteTask } from '../modules/delete-task';
import { editTask } from '../modules/edit-task';

export const eventOnClick = (eventClick, itemId, setInfoAboutTask) => {
  switch (eventClick) {
    case 'DELETE':
      deleteTask(itemId);
      break;
    case 'PUT':
      editTask(itemId, setInfoAboutTask);
      break;
  }
};
