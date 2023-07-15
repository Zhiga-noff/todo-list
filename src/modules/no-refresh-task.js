export const noRefreshTask = (infoAboutTask, setInfoAboutTask) => {
  if (infoAboutTask.flagForButton === 'filter') {
    if (infoAboutTask.noRefreshFlag) {
      setInfoAboutTask((pre) => ({ ...pre, flagForButton: 'add', noRefreshFlag: false }));
    } else {
      setInfoAboutTask((pre) => ({
        ...pre,
        flagForButton: 'add',
        noRefreshFlag: true,
      }));
    }
  }
};
