import { buttonsIcon } from '../data/buttons-icon';
import { eventOnClick } from './util/eventOnClick';

export const ButtonCreate = ({ flag, itemId, refreshAllRequests }) => {
  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (flag && (name === 'filter' || name === 'search')) {
      return (
        <a key={name}>
          <img src={url} alt="" />
        </a>
      );
    } else if (!flag && name !== 'filter' && name !== 'search') {
      return (
        <a
          key={name}
          onClick={() => {
            eventOnClick(eventClick, itemId);
            // if (eventClick==='DELETE') {}
            refreshAllRequests();
          }}
        >
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
