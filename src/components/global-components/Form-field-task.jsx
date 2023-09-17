import style from '../../styles/App.module.css';
import { ButtonForForm, VariantsActionsBySubmit, BreadCrumbs } from '../reuse-components';
import { useState } from 'react';
import { submitEvent } from '../../util';
import { useDispatch, useSelector } from 'react-redux';
import { taskListSelect, refreshSelect } from '../../store/selectors/';

export const FormFieldTask = () => {
  const [value, setValue] = useState('');
  const [action, setAction] = useState('add');

  const taskList = useSelector(taskListSelect);

  const onChangeTaskField = ({ target }) => {
    setValue(target.value);
  };

  const dispatch = useDispatch();

  const refreshAllRequests = () => {
    dispatch('REFRESH');
  };

  const onSubmitFormTask = (event) => {
    event.preventDefault();
    // submitEvent(value, action, refreshAllRequests, taskList, setTaskList);
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
          <VariantsActionsBySubmit action={action} setAction={setAction} />
        </div>
        <div className={style.flexField}>
          <ButtonForForm setAction={setAction} />
        </div>
      </div>
    </form>
  );
};
