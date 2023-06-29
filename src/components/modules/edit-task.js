export const editTask = async (itemId, infoAboutTask, setInfoAboutTask) => {
  const titleTask = infoAboutTask?.tasksList[itemId]?.title;

  setInfoAboutTask((pre) => ({
    ...pre,
    id: itemId,
    title: titleTask,
    flagForButton: 'edit',
  }));
  infoAboutTask.inputFieldRef.current.focus();
};
