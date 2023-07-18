import { buttonsIcon } from '../../data/buttons-icon';
import { filterTask } from '../../modules/filter-task';
import { useContext } from 'react';
import { ContextTaskList } from '../../context/ContextTaskList';

export const ButtonForForm = ({ setAction }) => {
  const { taskList, dispatchTaskList } = useContext(ContextTaskList);

  return buttonsIcon.map(({ name, url, eventClick }) => {
    if (name === 'filter') {
      return (
        <a
          key={name}
          onClick={() => {
            filterTask(taskList, dispatchTaskList);
          }}
        >
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
