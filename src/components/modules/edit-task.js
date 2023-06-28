import { TODOS_URL } from '../../App';

export const editTask = async (itemId, infoAboutTask, setInfoAboutTask) => {
  const { inputFieldRef } = infoAboutTask;

  try {
    const responseTask = await fetch(`${TODOS_URL}/${itemId}`, {});
    const result = await responseTask.json();
    setInfoAboutTask((pre) => ({
      ...pre,
      id: itemId,
      title: result.title,
      flagForButton: 'edit',
    }));
    infoAboutTask.current.focus;
  } catch (error) {
    console.log(error);
  }
};
