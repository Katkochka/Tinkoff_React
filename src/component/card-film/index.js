import s from './s.module.scss';

export const Card = ({film}) => {
  return (
    <div className={s.Card}>
      <div className={s.Label}> {film.title} </div>
      <div className={s.Info}>
        <div className={s.Year}> {film.year} </div>|
        <div className={s.Tegs}>{film.genres.map(genre => genre + ' ')}</div>
      </div>
    </div>
  );
};
