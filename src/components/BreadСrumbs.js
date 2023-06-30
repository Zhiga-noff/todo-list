import style from './styles/BreadСrumbs.module.css';
import { Link, NavLink } from 'react-router-dom';
import back from '../back.svg';

export const BreadСrumbs = () => {
  return (
    <ul className={style.breadCrumbs}>
      <li className={style.crumb}>
        <Link to={'/'}>
          <img src={back} alt="" />
        </Link>
      </li>
      <li>
        <NavLink to={'/'} className={style.crumb}>
          Главная
        </NavLink>
      </li>
      <li className={style.crumb}></li>
      {/*<li><><img src="" alt=""/></></li>*/}
    </ul>
  );
};
