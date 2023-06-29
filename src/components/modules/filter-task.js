export const filterTask = async (infoAboutTask, setInfoAboutTask) => {
  const { tasksList } = infoAboutTask;

  const sortResult = Object.entries(tasksList).sort((titleOne, titleTwo) => {
    if (titleOne[1].title > titleTwo[1].title) {
      return 1;
    }
    if (titleOne[1].title === titleTwo[1].title) {
      return 0;
    }
    if (titleOne[1].title < titleTwo[1].title) {
      return -1;
    }
  });

  setInfoAboutTask((pre) => ({
    ...pre,
    flagForButton: 'filter',
    tasksList: sortResult,
  }));
};
