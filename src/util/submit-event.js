import { requestAddTask, requestSearchTask } from './form-util-event';

export const submitEvent = (value, action, refreshAllRequests, taskList, setTaskList) => {
  if (action === 'add') {
    requestAddTask(value, refreshAllRequests);
  }
  if (action === 'search') {
    requestSearchTask(value, taskList, setTaskList);
  }
};
