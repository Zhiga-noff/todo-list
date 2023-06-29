import style from '../App.module.css';

export const ButtonForForm = ({
  infoAboutTask,
  setInfoAboutTask,
  refreshAllRequests,
}) => {
  const { flagForButton } = infoAboutTask;
  if (flagForButton === 'edit') {
    return <button className={style.buttonOrange}>Изменить задачу</button>;
  }
  if (flagForButton === 'search') {
    return (
      <>
        <button className={style.buttonGrey}>Поиск</button>
        <button
          type={'button'}
          className={style.buttonRed}
          onClick={() => {
            refreshAllRequests();
            setInfoAboutTask((pre) => ({ ...pre, flagForButton: 'add' }));
          }}
        >
          Сбросить
        </button>
      </>
    );
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
