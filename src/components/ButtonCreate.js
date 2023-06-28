import { buttonsIcon } from '../data/buttons-icon';
import { eventOnClick } from './util/event-on-click';
import { useState } from 'react';
import { noRefreshTask } from './modules/no-refresh-task';

export const ButtonCreate = ({
  flag,
  itemId,
  refreshAllRequests,
  infoAboutTask,
  setInfoAboutTask,
}) => {
  // const [noRefreshFlag, setNoRefreshFlag] = useState(false);
  //
  // const noRefreshFunction = () => {
  //   if (noRefreshFlag) {
  //     setNoRefreshFlag(false);
  //   } else {
  //     setNoRefreshFlag(true);
  //   }
  // };

  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (flag && (name === 'filter' || name === 'search')) {
      return (
        <a
          key={name}
          onClick={() => {
            eventOnClick(eventClick, itemId, infoAboutTask, setInfoAboutTask);
            if (infoAboutTask.noRefreshFlag) {
              refreshAllRequests();
            }
            noRefreshTask(infoAboutTask, setInfoAboutTask);
            console.log(infoAboutTask);
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
            refreshAllRequests();
          }}
        >
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
