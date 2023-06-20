import { TODOS_URL } from '../../App';

export const deleteTask = async (refreshFlag, setRefreshFlag, id) => {
  console.log('click');
  try {
    const response = await fetch(`${TODOS_URL}/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    setRefreshFlag(!refreshFlag);
  } catch (error) {
    console.error(error);
  }
};
