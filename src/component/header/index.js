import s from './s.module.scss';


export const Header = () => {
    return (
    <div className={s.Header}>
        <div className={s.Label}>
            Админка фильмотеки
        </div>
        <div className={s.Name}>
            <div className={s.NameCont}>
                Кабаргина Катя
            </div>
        </div>
    </div> 
    );
  };