import style from './TaskActive.module.css';
import { renderRequestTask } from './modules/render-request-task';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ButtonCreate } from './ButtonCreate';

export const CreateActiveTask = ({ infoAboutTask, setInfoAboutTask }) => {
  const [taskActive, setTaskActive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    renderRequestTask(params.id, setTaskActive, setIsLoading);
  }, [taskActive]);

  return isLoading ? (
    <div className={style.loader}></div>
  ) : (
    taskActive.map(({ id, title }) => (
      <li key={id} className={style.task}>
        <p>{title}</p>
        <div className={style.icons}>
          <ButtonCreate
            flag={false}
            itemId={id}
            infoAboutTask={infoAboutTask}
            setInfoAboutTask={setInfoAboutTask}
          />
        </div>
      </li>
    ))
  );
};
