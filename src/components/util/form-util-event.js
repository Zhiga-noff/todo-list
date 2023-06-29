import { ref, push, set } from 'firebase/database';
import { db } from '../../firebase';

export const requestAddTask = async (value) => {
  const tasksAddDbRef = ref(db, 'todos');

  push(tasksAddDbRef, {
    title: value,
  });
};

export const requestEditTask = async (value, infoAboutTask) => {
  const { id: taskId } = infoAboutTask;
  const tasksUpdateDbRef = ref(db, `todos/${taskId}`);

  set(tasksUpdateDbRef, {
    title: value,
  });
};

export const requestSearchTask = (value, infoAboutTask, setInfoAboutTask) => {
  const { tasksList } = infoAboutTask;
  let foundTask = {};

  Object.entries(tasksList).forEach((item) => {
    if (item[1].title.includes(value)) {
      foundTask = { ...foundTask, [`${item[0]}`]: item[1] };
    }
  });

  setInfoAboutTask((pre) => ({ ...pre, tasksList: foundTask }));
};
