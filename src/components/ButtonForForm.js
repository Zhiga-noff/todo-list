import style from './styles/App.module.css';

export const ButtonForForm = ({
  infoAboutTask,
  setInfoAboutTask,
  refreshAllRequests,
}) => {
  const { flagForButton } = infoAboutTask;
  if (flagForButton === 'edit') {
    return <button className={style.buttonOrange}>Изменить задачу</button>;
  } else if (flagForButton === 'search') {
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
  } else {
    return <button className={style.button}>Добавить задачу</button>;
  }
};
