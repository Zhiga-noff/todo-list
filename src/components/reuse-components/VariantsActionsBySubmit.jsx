import style from '../../styles/App.module.css';
import { useDispatch } from 'react-redux';

export const VariantsActionsBySubmit = ({ action, setAction }) => {
  const dispatch = useDispatch();

  if (action === 'search') {
    return (
      <>
        <button className={style.buttonGrey}>Поиск</button>
        <button
          type={'button'}
          className={style.buttonRed}
          onClick={() => {
            setAction('add');
            dispatch('REFRESH');
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
