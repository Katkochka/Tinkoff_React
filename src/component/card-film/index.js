import s from './s.module.scss';


export const Card = (props) => {
    return (
    <div className={s.Card}>
        <div className={s.Label}> {props.film.title} </div>
        <div className={s.Info}>
            <div className={s.Year}> {props.film.year} </div>
            |
            <div className={s.Tegs}> 
                {props.film.genres.map(genre => genre + " ")}
            </div>
        </div>
    </div> 
    );
  };