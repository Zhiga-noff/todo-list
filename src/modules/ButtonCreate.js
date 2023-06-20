import { buttonsIcon } from '../data/buttons-icon';
import { deleteTask } from './util/delete-task';
import { editTask } from './util/edit-task';

export const ButtonCreate = ({ flag, eventOnClick, itemId }) => {
  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (flag && (name === 'filter' || name === 'search')) {
      return (
        <a key={name}>
          <img src={url} alt="" />
        </a>
      );
    } else if (!flag && name !== 'filter' && name !== 'search') {
      return (
        <a key={name} onClick={() => eventOnClick(eventClick, itemId)}>
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
