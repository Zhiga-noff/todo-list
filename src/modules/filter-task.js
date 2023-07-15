export const filterTask = (taskList, setTaskList) => {
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
  setTaskList([...sortResult]);
};
