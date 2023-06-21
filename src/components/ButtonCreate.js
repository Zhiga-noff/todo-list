import { buttonsIcon } from '../data/buttons-icon';
import { eventOnClick } from './util/eventOnClick';

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
}) => {
  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (flag && (name === 'filter' || name === 'search')) {
      return (
        <a
          key={name}
          onClick={() =>
            eventOnClick(
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
        <a
          key={name}
          onClick={() => eventOnClick(tasks, setTasks, eventClick, itemId, setIsEditTask, setValue, setTaskId, inputRef, refreshFlag, setRefreshFlag)}
        >
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
