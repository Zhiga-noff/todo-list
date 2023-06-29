import { ref, remove } from 'firebase/database';
import { db } from '../../firebase';

export const deleteTask = async (id) => {
  const taskRemoveDbRef = ref(db, `todos/${id}`);
  remove(taskRemoveDbRef);
};
