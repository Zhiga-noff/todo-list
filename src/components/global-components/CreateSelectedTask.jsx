import React, { useContext } from 'react';
import style from '../../styles/TaskActive.module.css';
import { ButtonForTask } from '../reuse-components';
import { ContextTaskList } from '../../context/context';

const CreateSelectedTask = ({ setEditFlag }) => {
  const { taskList } = useContext(ContextTaskList);

  return (
    <div className={style.task}>
      <p>{taskList[0].title}</p>
      <div className={style.icons}>
        <ButtonForTask itemId={taskList[0].id} setEditFlag={setEditFlag} />
      </div>
    </div>
  );
};

export default CreateSelectedTask;
