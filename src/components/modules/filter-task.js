export const filterTask = (tasks, setTasks) => {
  const sortTasks = Object.entries(tasks).sort((titleOne, titleTwo) => {
    if (titleOne[1].title > titleTwo[1].title) {
      return 1;
    }
    if (titleOne[1].title < titleTwo[1].title) {
      return -1;
    }
    if (titleTwo[1].title === titleTwo[1].title) {
      return 0;
    }
  });

  setTasks(sortTasks);
};
