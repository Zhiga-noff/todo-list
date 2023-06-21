import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';

export const TaskName = ({
  tasks,
  setTasks,
  refreshFlag,
  setRefreshFlag,
  setIsEditTask,
  setValue,
  setTaskId,
  inputRef,
}) => {
  return tasks.map(({ id, title }) => (
    <li className={style.task} key={id}>
      <p>{title}</p>
      <div className={style.icons}>
        <ButtonCreate
          flag={false}
          tasks={tasks}
          setTasks={setTasks}
          itemId={id}
          refreshFlag={refreshFlag}
          setRefreshFlag={setRefreshFlag}
          setIsEditTask={setIsEditTask}
          setValue={setValue}
          setTaskId={setTaskId}
          inputRef={inputRef}
        />
      </div>
    </li>
  ));
};
