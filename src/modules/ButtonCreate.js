import { buttonsIcon } from '../data/buttons-icon';
import { deleteTask } from './util/delete-task';

export const ButtonCreate = ({ flag, itemId, refreshFlag, setRefreshFlag }) => {
  const eventOnClick = (eventClick) => {
    switch (eventClick) {
      case 'DELETE':
        deleteTask(refreshFlag, setRefreshFlag, itemId);
        break;
    }
  };

  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (flag && (name === 'filter' || name === 'search')) {
      return (
        <a key={name}>
          <img src={url} alt="" />
        </a>
      );
    } else if (!flag && name !== 'filter' && name !== 'search') {
      return (
        <a key={name} onClick={() => eventOnClick(eventClick)}>
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
