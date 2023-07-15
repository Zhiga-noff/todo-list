import React from 'react';
import style from '../../styles/TaskActive.module.css';
import { ButtonForTask } from '../reuse-components';

const CreateSelectedTask = ({ taskActive, setEditFlag }) => {
  return (
    <div className={style.task}>
      <p>{taskActive.title}</p>
      <div className={style.icons}>
        <ButtonForTask itemId={taskActive.id} setEditFlag={setEditFlag} />
      </div>
    </div>
  );
};

export default CreateSelectedTask;
