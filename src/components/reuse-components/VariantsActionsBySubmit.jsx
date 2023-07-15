import style from '../../styles/App.module.css';

export const VariantsActionsBySubmit = ({ refreshAllRequests, action, setAction }) => {
  if (action === 'search') {
    return (
      <>
        <button className={style.buttonGrey}>Поиск</button>
        <button
          type={'button'}
          className={style.buttonRed}
          onClick={() => {
            setAction('add');
            refreshAllRequests();
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
