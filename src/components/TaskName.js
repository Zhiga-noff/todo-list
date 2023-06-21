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
  value,
  clickFilter,
  setClickFilter,
  isSearchTask,
  setIsSearchTask,
}) => {
  return tasks.map(({ id, title }) => (
    <li className={style.task} key={id}>
      <p>{title}</p>
      <div className={style.icons}>
        <ButtonCreate
          flag={false}
          itemId={id}
          tasks={tasks}
          setTasks={setTasks}
          refreshFlag={refreshFlag}
          setRefreshFlag={setRefreshFlag}
          setIsEditTask={setIsEditTask}
          value={value}
          setValue={setValue}
          setTaskId={setTaskId}
          inputRef={inputRef}
          clickFilter={clickFilter}
          setClickFilter={setClickFilter}
          isSearchTask={isSearchTask}
          setIsSearchTask={setIsSearchTask}
        />
      </div>
    </li>
  ));
};
