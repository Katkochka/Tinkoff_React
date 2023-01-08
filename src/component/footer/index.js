import { Link } from 'react-router-dom';
import s from './s.module.scss';


export const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.Info}>
                Найдено 7 элементов
            </div>
            <Link to="/add-film" className={s.Add}> + Добавить</Link>
        </div>
    );
  };