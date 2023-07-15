import { buttonsIcon } from '../../data/buttons-icon';
import { Link } from 'react-router-dom';
import { deleteTask } from '../../modules/delete-task';

export const ButtonForTask = ({ itemId, setEditFlag }) => {
  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (name === 'edit') {
      return (
        <a key={name} onClick={() => setEditFlag(true)}>
          <img src={url} alt="" />
        </a>
      );
    } else if (name === 'delete') {
      return (
        <Link
          to={'/'}
          key={name}
          onClick={() => {
            deleteTask(itemId);
          }}
        >
          <img src={url} alt="" />
        </Link>
      );
    }
  });
};
