import { TODOS_URL } from '../../App';

export const filterTask = async (setInfoAboutTask) => {
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
    tasksList: sortResult,
    noRefreshFlag: true,
  }));
};
