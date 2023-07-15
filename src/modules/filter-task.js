import { TODOS_URL } from '../App';

export const filterTask = async (infoAboutTask, setInfoAboutTask) => {
  try {
    if (
      infoAboutTask.flagForButton === 'add' ||
      infoAboutTask.flagForButton === 'search'
    ) {
      const responseTask = await fetch(TODOS_URL, {});
      const result = await responseTask.json();
      const sortResult = result.sort(({ title: titleOne }, { title: titleTwo }) => {
        if (titleOne > titleTwo) {
          return 1;
        }
        if (titleOne === titleTwo) {
          return 0;
        }
        if (titleOne < titleTwo) {
          return -1;
        }
      });
      setInfoAboutTask((pre) => ({
        ...pre,
        flagForButton: 'filter',
        tasksList: sortResult,
      }));
    }
  } catch (error) {
    console.error(error);
  }
};
