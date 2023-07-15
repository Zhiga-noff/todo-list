import style from '../styles/TaskActive.module.css';
import { renderRequestTask } from '../../modules/render-request-task';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BreadRumbs, ButtonForTask } from '../reuse-components/';

export const CreateSelectedTask = () => {
  const [taskActive, setTaskActive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    renderRequestTask(id, setTaskActive, setIsLoading);
  }, []);

  console.log(taskActive);

  return (
    <>
      <div className={style.form}>
        <BreadRumbs />
        <p className={style.title}> {taskActive?.title}</p>
      </div>
      {isLoading ? (
        <div className={style.loader}></div>
      ) : (
        <div className={style.task}>
          <p>{taskActive?.title}</p>
          <div className={style.icons}>
            <ButtonForTask itemId={taskActive?.id} />
          </div>
        </div>
      )}
    </>
  );
};
