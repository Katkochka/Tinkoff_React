import {Link} from 'react-router-dom';
import style from './style.module.scss';

export const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.Info}>Найдено 7 элементов</div>
      <Link to="/add-film" className={style.Add}>
        {' '}
        + Добавить
      </Link>
    </div>
  );
};
