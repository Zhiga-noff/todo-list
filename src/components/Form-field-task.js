import style from './styles/App.module.css';
import { ButtonCreate } from './ButtonCreate';
import { useState } from 'react';
import { useExchangeButton } from './util/use-exchange-button';
import { submitEvent } from './util/submit-event';
import { ButtonForForm } from './ButtonForForm';
import { Link } from 'react-router-dom';
import { BreadСrumbs } from './BreadСrumbs';

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
    submitEvent(value, refreshAllRequests, infoAboutTask, setInfoAboutTask);
    if (infoAboutTask.flagForButton !== 'search') {
      setInfoAboutTask((pre) => ({
        ...pre,
        id: '',
        title: '',
        flagForButton: 'add',
      }));
    }

    setValue('');
  };

  return (
    <form action="#" className={style.form} onSubmit={onSubmitFormTask}>
      <BreadСrumbs />
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
            ref={infoAboutTask.inputFieldRef}
          />
          <ButtonForForm
            infoAboutTask={infoAboutTask}
            setInfoAboutTask={setInfoAboutTask}
            refreshAllRequests={refreshAllRequests}
          />
        </div>
        <div className={style.flexField}>
          <ButtonCreate
            flag={true}
            refreshAllRequests={refreshAllRequests}
            infoAboutTask={infoAboutTask}
            setInfoAboutTask={setInfoAboutTask}
          />
        </div>
      </div>
    </form>
  );
};
