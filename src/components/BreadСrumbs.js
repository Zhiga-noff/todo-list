import style from './styles/BreadСrumbs.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import back from '../back.svg';

export const BreadСrumbs = () => {
  const navigate = useNavigate();

  return (
    <ul className={style.breadCrumbs}>
      <li className={style.crumb} onClick={() => navigate(-1)}>
        <Link>
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
