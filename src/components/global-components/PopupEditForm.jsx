import React, { useState } from 'react';
import style from '../../styles/PopupEditForm.module.css';
import { requestEditTask } from '../../util';

const PopupEditForm = ({ taskActive, setEditFlag }) => {
  const [valueEditTask, setValueEditTask] = useState(taskActive.title);

  const onChangeEditField = ({ target }) => {
    setValueEditTask(target.value);
  };

  return (
    <div className={style.area}>
      <div className={style.block}>
        <h3 className={style.title}>Редактировать задачу:</h3>
        <form
          action="#"
          onSubmit={(event) => {
            event.preventDefault();
            setEditFlag(false);
            requestEditTask(valueEditTask, taskActive.id);
          }}
        >
          <p className={style.taskName}>{taskActive.title}</p>
          <div>
            <input
              className={style.field}
              type="text"
              value={valueEditTask}
              onChange={onChangeEditField}
            />
            <button className={style.buttonOrange}>Исправить</button>
            <button
              type={'button'}
              className={style.buttonRed}
              onClick={() => {
                setEditFlag(false);
              }}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupEditForm;
