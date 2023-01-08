import s from './s.module.scss';


export const Card = () => {
    return (
    <div className={s.Card}>
        <div className={s.Label}> Название фильма </div>
        <div className={s.Info}>
            <div className={s.Year}> 2008 </div>
            |
            <div className={s.Tegs}> Теги, по типу жанра </div>
        </div>
    </div> 
    );
  };