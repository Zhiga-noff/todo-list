import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';

export const TaskName = ({ tasks, refreshFlag, setRefreshFlag }) => {
  return tasks.map(({ id, title }) => (
    <li className={style.task} key={id}>
      <p>{title}</p>
      <div className={style.icons}>
        <ButtonCreate
          flag={false}
          itemId={id}
          refreshFlag={refreshFlag}
          setRefreshFlag={setRefreshFlag}
        />
      </div>
    </li>
  ));
};
