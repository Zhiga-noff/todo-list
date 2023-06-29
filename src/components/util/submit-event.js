import { requestAddTask, requestEditTask, requestSearchTask } from './form-util-event';

export const submitEvent = (value, infoAboutTask, setInfoAboutTask) => {
  if (value === '') {
    console.error('ошибка');
  } else {
    switch (infoAboutTask.flagForButton) {
      case 'add':
        requestAddTask(value);
        break;
      case 'edit':
        requestEditTask(value, infoAboutTask);
        break;
      case 'search':
        requestSearchTask(value, infoAboutTask, setInfoAboutTask);
        break;
    }
  }
};
