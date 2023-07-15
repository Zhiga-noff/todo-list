import { TODOS_URL } from '../App';

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${TODOS_URL}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(error);
  }
};
