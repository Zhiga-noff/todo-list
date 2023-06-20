import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';

export const TaskName = ({ tasks }) => {
  return tasks.map(({ id, title }) => (
    <li className={style.task} key={id}>
      <p>{title}</p>
      <div className={style.icons}>
        <ButtonCreate flag={false} />
      </div>
    </li>
  ));
};
