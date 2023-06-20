import style from '../App.module.css';
import { ButtonCreate } from './ButtonCreate';

export const FormFieldTask = () => {
  return (
    <form action="#" className={style.form}>
      <p className={style.title}>Тут твои задачи</p>
      <div className={style.flexForm}>
        <div className={style.flexField}>
          <input
            className={style.field}
            type="text"
            name="fieldNewTask"
            placeholder={'Напишите что вы хотите сделать'}
          />
          <button className={style.button}>Добавить задачу</button>
        </div>
        <div className={style.flexField}>
          <ButtonCreate flag={true} />
        </div>
      </div>
    </form>
  );
};
