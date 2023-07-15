import style from '../styles/App.module.css';
import { ButtonForForm, VariantsActionsBySubmit, BreadCrumbs } from '../reuse-components';
import { useState } from 'react';
import { submitEvent } from '../../util';

export const FormFieldTask = ({ refreshAllRequests, taskList, setTaskList }) => {
  const [value, setValue] = useState('');
  const [action, setAction] = useState('add');

  const onChangeTaskField = ({ target }) => {
    setValue(target.value);
  };

  const onSubmitFormTask = (event) => {
    event.preventDefault();
    submitEvent(value, action, refreshAllRequests, taskList, setTaskList);
    setValue('');
  };

  return (
    <form action="#" className={style.form} onSubmit={onSubmitFormTask}>
      <BreadCrumbs />
      <p className={style.title}>Тут твои задачи</p>
      <div className={style.flexForm}>
        <div className={style.flexField}>
          <input
            className={style.field}
            type="text"
            placeholder={'Напишите что вы хотите сделать'}
            value={value}
            onChange={onChangeTaskField}
          />
          <VariantsActionsBySubmit
            refreshAllRequests={refreshAllRequests}
            action={action}
            setAction={setAction}
          />
        </div>
        <div className={style.flexField}>
          <ButtonForForm refreshAllRequests={refreshAllRequests} setAction={setAction} />
        </div>
      </div>
    </form>
  );
};
