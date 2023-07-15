import style from '../styles/App.module.css';
import { ButtonForForm, ButtonBySubmit, BreadRumbs } from '../reuse-components';
import { useState } from 'react';
import { submitEvent, useExchangeButton } from '../../util';

export const FormFieldTask = ({
  infoAboutTask,
  setInfoAboutTask,
  refreshAllRequests,
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
    <form
      action="src/components/global-components/Form-field-task#Form-field-task.jsx"
      className={style.form}
      onSubmit={onSubmitFormTask}
    >
      <BreadRumbs infoAboutTask={infoAboutTask} setInfoAboutTask={setInfoAboutTask} />
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
          <ButtonBySubmit
            infoAboutTask={infoAboutTask}
            setInfoAboutTask={setInfoAboutTask}
            refreshAllRequests={refreshAllRequests}
          />
        </div>
        <div className={style.flexField}>
          <ButtonForForm
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
