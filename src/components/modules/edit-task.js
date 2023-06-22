import { TODOS_URL } from '../../App';

export const editTask = async (itemId, setInfoAboutTask) => {
  console.log('click');
  const responseTask = await fetch(`${TODOS_URL}/${itemId}`, {});
  const result = await responseTask.json();
  console.log(result);
  setInfoAboutTask((pre) => ({
    ...pre,
    id: itemId,
    title: result.title,
    flagForButton: 'edit',
  }));
};
