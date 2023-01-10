import style from './style.module.scss';

export const Card = ({film}) => {
  return (
    <li className={style.Card}>
      <div className={style.Label}> {film.title} </div>
      <div className={style.Info}>
        <div className={style.Year}> {film.year} </div>|
        <div className={style.Tegs}>{film.genres.map(genre => genre + ' ')}</div>
      </div>
    </li>
  );
};
