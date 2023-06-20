import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';
import { useState } from 'react';
import { requestAddTask, validateTaskField } from './util/form-util-event';

export const FormFieldTask = ({
  refreshFlag,
  setRefreshFlag,
  buttonFlagRefresh,
  setButtonFlagRefresh,
}) => {
  const [value, setValue] = useState('');

  const onChangeTaskField = ({ target }) => {
    setValue(target.value);
  };

  const onSubmitFormTask = (event) => {
    event.preventDefault();
    const valid = validateTaskField(value);
    if (!valid) {
      return;
    }
    requestAddTask(value, refreshFlag, setRefreshFlag);
    setButtonFlagRefresh(true);
    setValue('');
  };

  return (
    <form action="#" className={style.form} onSubmit={onSubmitFormTask}>
      <p className={style.title}>Тут твои задачи</p>
      <div className={style.flexForm}>
        <div className={style.flexField}>
          <input
            className={style.field}
            type="text"
            name="fieldNewTask"
            placeholder={'Напишите что вы хотите сделать'}
            value={value}
            onChange={onChangeTaskField}
          />
          <button disabled={buttonFlagRefresh} className={style.button}>
            Добавить задачу
          </button>
        </div>
        <div className={style.flexField}>
          <ButtonCreate flag={true} />
        </div>
      </div>
    </form>
  );
};
