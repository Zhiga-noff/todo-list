import style from '../App.module.css';

export const ButtonForForm = ({ infoAboutTask }) => {
  const { flagForButton } = infoAboutTask;
  if (flagForButton === 'edit') {
    return <button className={style.button}>Изменить задачу</button>;
  }
  if (flagForButton === 'search') {
    return <button className={style.button}>Поиск</button>;
  }
  if (flagForButton === 'filter') {
    return (
      <button disabled={true} className={style.button}>
        Добавить задачу
      </button>
    );
  }
  if (flagForButton === 'add') {
    return <button className={style.button}>Добавить задачу</button>;
  }
};

{
  infoAboutTask.flagForButton === 'edit'
    ? 'Изменить задачу'
    : 'search'
    ? 'Поиск'
    : 'filter'
    ? ''
    : 'Добавить задачу';
}
