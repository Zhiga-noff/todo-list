import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';
import { useEffect, useState } from 'react';
import { requestAddTask, validateTaskField } from './util/form-util-event';
import { useExchangeButton } from './util/use-exchange-button';
import { submitEvent } from './util/submit-event';

export const FormFieldTask = ({
  refreshAllRequests,
  infoAboutTask,
  setInfoAboutTask,
}) => {
  const [value, setValue] = useState('');
  useExchangeButton(infoAboutTask, setValue);

  const onChangeTaskField = ({ target }) => {
    setValue(target.value);
  };

  const onSubmitFormTask = (event) => {
    event.preventDefault();
    submitEvent(value, refreshAllRequests, infoAboutTask);
    setInfoAboutTask({
      id: '',
      title: '',
      flagForButton: 'add',
    });
    setValue('');
    refreshAllRequests();
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
          <button className={style.button}>
            {infoAboutTask.flagForButton === 'edit'
              ? 'Изменить задачу'
              : 'Добавить задачу'}
          </button>
        </div>
        <div className={style.flexField}>
          <ButtonCreate flag={true} />
        </div>
      </div>
    </form>
  );
};
