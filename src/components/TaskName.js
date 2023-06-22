import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';
import { deleteTask } from './modules/delete-task';
import { editTask } from './modules/edit-task';

export const TaskName = ({ tasks, refreshFlag, setRefreshFlag, setIsEditTask, setValue, setTaskId, inputRef }) => {
  const eventOnClick = (eventClick, itemId) => {
    switch (eventClick) {
      case 'DELETE':
        deleteTask(refreshFlag, setRefreshFlag, itemId);
        break;
      case 'PUT':
        editTask(refreshFlag, setRefreshFlag, itemId, setIsEditTask, setValue, setTaskId, inputRef);
        break;
    }
  };

  return tasks.map(({ id, title }) => (
    <li className={style.task} key={id}>
      <p>{title}</p>
      <div className={style.icons}>
        <ButtonCreate flag={false} eventOnClick={eventOnClick} itemId={id} />
      </div>
    </li>
  ));
};
