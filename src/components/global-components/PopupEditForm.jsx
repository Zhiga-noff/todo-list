import React, { useContext, useState } from 'react';
import style from '../../styles/PopupEditForm.module.css';
import { requestEditTask } from '../../util';
import { useSelector } from 'react-redux';
import { taskListSelect } from '../../store/selectors';

const PopupEditForm = ({ setEditFlag }) => {
  const taskList = useSelector(taskListSelect);
  const [valueEditTask, setValueEditTask] = useState(taskList[0].title);

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
            requestEditTask(valueEditTask, taskList[0].id);
          }}
        >
          <p className={style.taskName}>{taskList[0].title}</p>
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
