import { buttonsIcon } from '../../data/buttons-icon';
import { eventOnClick } from '../../util/event-on-click';
import { noRefreshTask } from '../../modules/no-refresh-task';
import { Link } from 'react-router-dom';

export const ButtonForForm = ({ refreshAllRequests, setAction }) => {
  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (name === 'filter') {
      return (
        <a key={name} onClick={() => {}}>
          <img src={url} alt="" />
        </a>
      );
    }
    if (name === 'search') {
      return (
        <a
          key={name}
          onClick={() => {
            setAction('search');
          }}
        >
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
