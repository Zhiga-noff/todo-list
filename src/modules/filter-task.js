export const filterTask = (taskList, dispatchTaskList) => {
  const sortResult = taskList.sort(({ title: titleOne }, { title: titleTwo }) => {
    if (titleOne > titleTwo) {
      return 1;
    }
    if (titleOne === titleTwo) {
      return 0;
    }
    if (titleOne < titleTwo) {
      return -1;
    }
  });
  dispatchTaskList({ type: 'SET_UPDATE_TASK_LIST', payload: [...sortResult] });
};
