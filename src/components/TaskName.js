import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';
import { useEffect, useState } from 'react';
import { createNewTask } from './modules/create-new-task';

export const TaskName = ({
  // refreshFlag,
  refreshAllRequests,
  infoAboutTask,
  setInfoAboutTask,
}) => {
  const { tasksList } = infoAboutTask;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    createNewTask(setInfoAboutTask, setIsLoading);
  }, []);

  // console.log(tasksList);

  return isLoading ? (
    <div className={style.loader} />
  ) : infoAboutTask.flagForButton === 'filter' ? (
    tasksList.map(([id, { title }]) => (
      <li className={style.task} key={id}>
        <p>{title}</p>
        <div className={style.icons}>
          <ButtonCreate
            flag={false}
            itemId={id}
            refreshAllRequests={refreshAllRequests}
            infoAboutTask={infoAboutTask}
            setInfoAboutTask={setInfoAboutTask}
          />
        </div>
      </li>
    ))
  ) : (
    Object.entries(tasksList).map(([id, { title }]) => (
      <li className={style.task} key={id}>
        <p>{title}</p>
        <div className={style.icons}>
          <ButtonCreate
            flag={false}
            itemId={id}
            refreshAllRequests={refreshAllRequests}
            infoAboutTask={infoAboutTask}
            setInfoAboutTask={setInfoAboutTask}
          />
        </div>
      </li>
    ))
  );
};

// (
//     tasksList.map(({ id, title }) => (
//         <li className={style.task} key={id}>
//             <p>{title}</p>
//             <div className={style.icons}>
//                 <ButtonCreate
//                     flag={false}
//                     itemId={id}
//                     refreshAllRequests={refreshAllRequests}
//                     infoAboutTask={infoAboutTask}
//                     setInfoAboutTask={setInfoAboutTask}
//                 />
//             </div>
//         </li>
//     ))
// );
