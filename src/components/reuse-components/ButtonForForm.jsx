import { buttonsIcon } from '../../data/buttons-icon';
import { eventOnClick } from '../../util/event-on-click';
import { noRefreshTask } from '../../modules/no-refresh-task';
import { Link } from 'react-router-dom';

export const ButtonForForm = ({
  flag,
  itemId,
  refreshAllRequests,
  infoAboutTask,
  setInfoAboutTask,
}) => {
  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (flag && (name === 'filter' || name === 'search')) {
      return (
        <a
          key={name}
          onClick={() => {
            eventOnClick(eventClick, itemId, infoAboutTask, setInfoAboutTask);
            noRefreshTask(infoAboutTask, setInfoAboutTask);
            if (infoAboutTask.noRefreshFlag) {
              refreshAllRequests();
            }
          }}
        >
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
