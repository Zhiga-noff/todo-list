import { TODOS_URL } from '../App';

export const editTask = async (itemId, infoAboutTask, setInfoAboutTask) => {
  try {
    const responseTask = await fetch(`${TODOS_URL}/${itemId}`, {});
    const result = await responseTask.json();
    setInfoAboutTask((pre) => ({
      ...pre,
      id: itemId,
      title: result.title,
      flagForButton: 'edit',
    }));
    infoAboutTask.inputFieldRef.current.focus();
  } catch (error) {
    console.error(error);
  }
};
