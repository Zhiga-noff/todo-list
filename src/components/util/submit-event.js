import { requestAddTask, requestEditTask } from './form-util-event';

export const submitEvent = (value, refreshAllRequests, infoAboutTask) => {
  if (value === '') {
    console.error('ошибка');
  } else {
    switch (infoAboutTask.flagForButton) {
      case 'add':
        requestAddTask(value, refreshAllRequests);
        break;
      case 'edit':
        requestEditTask(value, refreshAllRequests, infoAboutTask);
        break;
    }
  }
};
