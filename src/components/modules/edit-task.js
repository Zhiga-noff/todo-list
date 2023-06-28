import { TODOS_URL } from '../../App';

export const editTask = async (itemId, setInfoAboutTask) => {
  try {
    const responseTask = await fetch(`${TODOS_URL}/${itemId}`, {});
    const result = await responseTask.json();
    setInfoAboutTask((pre) => ({
      ...pre,
      id: itemId,
      title: result.title,
      flagForButton: 'edit',
    }));
  } catch (error) {
    console.log(error);
  }
};
