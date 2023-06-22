import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';
import { deleteTask } from './modules/delete-task';
import { editTask } from './modules/edit-task';

export const TaskName = ({ tasks, setIsEditTask, setValue, setTaskId, inputRef, clickFilter }) => {
  const eventOnClick = (eventClick, itemId) => {
    switch (eventClick) {
      case 'DELETE':
        deleteTask(itemId);
        break;
      case 'PUT':
        editTask(tasks, itemId, setIsEditTask, setValue, setTaskId, inputRef);
        break;
    }
  };

  return clickFilter
    ? tasks.map(([id, { title }]) => (
        <li className={style.task} key={id}>
          <p>{title}</p>
          <div className={style.icons}>
            <ButtonCreate flag={false} eventOnClick={eventOnClick} itemId={id} />
          </div>
        </li>
      ))
    : Object.entries(tasks).map(([id, { title }]) => (
        <li className={style.task} key={id}>
          <p>{title}</p>
          <div className={style.icons}>
            <ButtonCreate flag={false} eventOnClick={eventOnClick} itemId={id} />
          </div>
        </li>
      ));
};
