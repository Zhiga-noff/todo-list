import { deleteTask } from './delete-task';

export const eventOnClick = (eventClick, itemId) => {
  switch (eventClick) {
    case 'DELETE':
      deleteTask(itemId);
      break;
  }
};
