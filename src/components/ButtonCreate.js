import { buttonsIcon } from '../data/buttons-icon';
import { eventOnClickInForm } from './util/eventOnClickInForm';

export const ButtonCreate = ({
  tasks,
  setTasks,
  flag,
  itemId,
  setIsEditTask,
  value,
  setValue,
  setTaskId,
  inputRef,
  refreshFlag,
  setRefreshFlag,
  clickFilter,
  setClickFilter,
  isSearchTask,
  setIsSearchTask,
  eventOnClick,
}) => {
  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (flag && (name === 'filter' || name === 'search')) {
      return (
        <a
          key={name}
          onClick={() =>
            eventOnClickInForm(
              tasks,
              setTasks,
              eventClick,
              itemId,
              setIsEditTask,
              value,
              setValue,
              setTaskId,
              inputRef,
              refreshFlag,
              setRefreshFlag,
              clickFilter,
              setClickFilter,
              isSearchTask,
              setIsSearchTask,
            )
          }
        >
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