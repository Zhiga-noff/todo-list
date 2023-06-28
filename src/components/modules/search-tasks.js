export const searchTasks = (infoAboutTask, setInfoAboutTask) => {
  setInfoAboutTask((pre) => ({
    ...pre,
    flagForButton: 'search',
  }));
  infoAboutTask.inputFieldRef.current.focus();
};
