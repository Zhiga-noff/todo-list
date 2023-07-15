import { requestAddTask, requestEditTask, requestSearchTask } from './form-util-event';

export const submitEvent = (
  value,
  refreshAllRequests,
  infoAboutTask,
  setInfoAboutTask,
) => {
  if (value === '') {
    console.error('ошибка');
  } else {
    switch (infoAboutTask.flagForButton) {
      case 'add':
        requestAddTask(value, refreshAllRequests);
        break;
      case 'search':
        requestSearchTask(value, infoAboutTask, setInfoAboutTask);
        break;
    }
  }
};
