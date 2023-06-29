import { buttonsIcon } from '../data/buttons-icon';
import { eventOnClick } from './util/event-on-click';

export const ButtonCreate = ({ flag, itemId, infoAboutTask, setInfoAboutTask }) => {
  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (flag && (name === 'filter' || name === 'search')) {
      return (
        <a
          key={name}
          onClick={() => {
            eventOnClick(eventClick, itemId, infoAboutTask, setInfoAboutTask);
          }}
        >
          <img src={url} alt="" />
        </a>
      );
    } else if (!flag && name !== 'filter' && name !== 'search') {
      return (
        <a
          key={name}
          onClick={() => {
            eventOnClick(eventClick, itemId, infoAboutTask, setInfoAboutTask);
          }}
        >
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
