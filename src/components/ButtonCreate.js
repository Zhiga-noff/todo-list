import { buttonsIcon } from '../data/buttons-icon';
import { eventOnClick } from './util/eventOnClick';
import { useState } from 'react';

export const ButtonCreate = ({ flag, itemId, refreshAllRequests, setInfoAboutTask }) => {
  const [noRefreshFlag, setNoRefreshFlag] = useState(false);

  const noRefreshFunction = () => {
    if (noRefreshFlag) {
      setNoRefreshFlag(false);
    } else {
      setNoRefreshFlag(true);
    }
  };

  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (flag && (name === 'filter' || name === 'search')) {
      return (
        <a
          key={name}
          onClick={() => {
            eventOnClick(eventClick, itemId, setInfoAboutTask);
            if (noRefreshFlag) {
              refreshAllRequests();
            }
            noRefreshFunction();
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
            eventOnClick(eventClick, itemId, setInfoAboutTask);
            // refreshAllRequests();
          }}
        >
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
