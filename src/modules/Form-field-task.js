import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';
import { requestAddTask, requestUpdateTask } from './util/form-util-event';

export const FormFieldTask = ({
  tasks,
  setTasks,
  refreshFlag,
  setRefreshFlag,
  isEditTask,
  setIsEditTask,
  buttonFlagRefresh,
  setButtonFlagRefresh,
  value,
  setValue,
  taskId,
  setTaskId,
  inputRef,
  clickFilter,
  setClickFilter,
}) => {
  const onChangeTaskField = ({ target }) => {
    setValue(target.value);
  };

  const onSubmitFormTask = (event) => {
    event.preventDefault();
    if (value === '') {
      console.error('Ошибка');
      return;
    }
    if (isEditTask) {
      requestUpdateTask(value, refreshFlag, setRefreshFlag, taskId);
      setTaskId('');
      setIsEditTask(false);
      setButtonFlagRefresh(true);
      setValue('');
    } else {
      requestAddTask(value, refreshFlag, setRefreshFlag);
      setButtonFlagRefresh(true);
      setValue('');
    }
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
            ref={inputRef}
          />
          {isEditTask ? (
            <button disabled={buttonFlagRefresh} className={style.buttonOrange}>
              Внести изменения
            </button>
          ) : (
            <button disabled={buttonFlagRefresh} className={style.button}>
              Добавить задачу
            </button>
          )}
        </div>
        <div className={style.flexField}>
          <ButtonCreate
            flag={true}
            tasks={tasks}
            setTasks={setTasks}
            refreshFlag={refreshFlag}
            setRefreshFlag={setRefreshFlag}
            setIsEditTask={setIsEditTask}
            setValue={setValue}
            setTaskId={setTaskId}
            inputRef={inputRef}
            clickFilter={clickFilter}
            setClickFilter={setClickFilter}
          />
        </div>
      </div>
    </form>
  );
};
