import { TODOS_URL } from '../../App';
import { ref, push, set } from 'firebase/database';
import { db } from '../../firebase';

export const requestAddTask = async (value) => {
  const tasksAddDbRef = ref(db, 'todos');
  push(tasksAddDbRef, {
    title: value,
  });
};

export const requestUpdateTask = async (value, refreshFlag, setRefreshFlag, taskId) => {
  const tasksUpdateDbRef = ref(db, `todos/${taskId}`);

  set(tasksUpdateDbRef, {
    title: value,
  });
};

export const searchTaskRequest = (tasks, value, setTasks) => {
  let foundTask = [];
  Object.entries(tasks).forEach((item) => {
    console.log(item);
    if (item[1].title.includes(value)) {
      foundTask.push(item);
      setTasks(foundTask);
    }
  });
  console.log(foundTask);
  // console.log('ты мне веришь?'.includes('ты мне'));
};
