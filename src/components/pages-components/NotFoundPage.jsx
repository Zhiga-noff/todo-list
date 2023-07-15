import notFondImage from '../../img/404.svg';
import { Link } from 'react-router-dom';
import style from '../../styles/App.module.css';

export const NotFoundPage = () => {
  return (
    <li className={style.notFoundBox}>
      <img src={notFondImage} alt="" />
      <Link to={'/'} className={style.buttonHome}>
        Вернуться на главную
      </Link>
    </li>
  );
};
