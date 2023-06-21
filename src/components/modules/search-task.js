export const searchTask = (isSearchTask, setIsSearchTask, refreshFlag, setRefreshFlag, setValue) => {
  if (isSearchTask) {
    setRefreshFlag(!refreshFlag);
    setValue('');
    setIsSearchTask(false);
  } else {
    setIsSearchTask(true);
    setRefreshFlag(!refreshFlag);
  }
};
