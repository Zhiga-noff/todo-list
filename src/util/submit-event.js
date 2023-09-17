import { requestAddTask, requestSearchTask } from './form-util-event';

export const submitEvent = (value, action, dispatch, taskList, setTaskList) => {
  if (action === 'add') {
    requestAddTask(value, dispatch);
  }
  if (action === 'search') {
    requestSearchTask(value, taskList, dispatch);
  }
};
