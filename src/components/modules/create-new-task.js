import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

export async function createNewTask(setInfoAboutTask, setIsLoading) {
  const tasksDbRef = ref(db, 'todos');
  return onValue(tasksDbRef, (snapshot) => {
    const loadedTasks = snapshot.val();
    setInfoAboutTask((pre) => ({
      ...pre,
      tasksList: loadedTasks || {},
    }));
    setIsLoading(false);
  });
}
