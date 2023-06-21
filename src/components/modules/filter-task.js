export const filterTask = (tasks) => {
  const sortTasks = tasks.sort(({ title: titleOne }, { title: titleTwo }) => {
    if (titleOne > titleTwo) {
      return 1;
    }
    if (titleOne < titleTwo) {
      return -1;
    }
    if (titleTwo === titleTwo) {
      return 0;
    }
  });
  return sortTasks;
};
