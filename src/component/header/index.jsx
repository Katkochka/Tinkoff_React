import style from './style.module.scss';

export const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.Label}>Админка фильмотеки</div>
      <div className={style.Name}>
        <div className={style.NameCont}>Кабаргина Катя</div>
      </div>
    </header>
  );
};
