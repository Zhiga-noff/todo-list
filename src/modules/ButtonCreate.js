import { buttonsIcon } from '../data/buttons-icon';
import { deleteTask } from './util/delete-task';
import { editTask } from './util/edit-task';
import { eventOnClick } from './util/eventOnClick';

export const ButtonCreate = ({
  tasks,
  setTasks,
  flag,
  itemId,
  setIsEditTask,
  setValue,
  setTaskId,
  inputRef,
  refreshFlag,
  setRefreshFlag,
  clickFilter,
  setClickFilter,
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
              setValue,
              setTaskId,
              inputRef,
              refreshFlag,
              setRefreshFlag,
              clickFilter,
              setClickFilter,
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
          onClick={() =>
            eventOnClick(
              tasks,
              setTasks,
              eventClick,
              itemId,
              setIsEditTask,
              setValue,
              setTaskId,
              inputRef,
              refreshFlag,
              setRefreshFlag,
            )
          }
        >
          <img src={url} alt="" />
        </a>
      );
    }
  });
};
