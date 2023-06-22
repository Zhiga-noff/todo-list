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
  tasks.forEach((item) => {
    if (item.title.includes(value)) {
      foundTask = [item];
      setTasks(foundTask);
      return;
    }
  });
  console.log(foundTask);
  console.log('ты мне веришь?'.includes('ты мне'));
};
