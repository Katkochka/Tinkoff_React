import { CopyOutlined, EditOutlined  } from '@ant-design/icons';
import s from "./s.module.scss"


const Add = () => {
    return (
        <div className={'row'}>
            <div className={'col-9'}>
            <div className={s.Add}>
        <h1 className={s.Edit}>Редактрирование / Создание</h1>
    
            <form className={s.Form}>
            <h2 className={s.FormName}> Название фильма </h2>
            <input type='text' className={s.Form__input} placeholder="Введите название фильма" required/>

            <h2 className={s.FormName}> Название фильма </h2>
            <input type='text' className={s.Form__input} placeholder="Год" required/>
            

            <h2 className={s.FormName}> Описание </h2>
            <textarea type='text' rows = "3" style={{resize: 'none'}} className={s.Form__input} placeholder="Введите описание" required/>

            <h2 className={s.FormName}> Обложка </h2>
            <input type='text' className={s.Form__input} placeholder="Укажите ссылку на обложку" required/>

            <h2 className={s.FormName}> Название фильма </h2>
            <input type='text' className={s.Form__input} placeholder="Задайте рейтинг" required/>

            <h2 className={s.FormName}> Укажите список актеров </h2>
            <input type='text' className={s.Form__input} placeholder="Введите актеров через ;" required/>

            <h2 className={s.FormName}> Режиссер </h2>
            <input type='text' className={s.Form__input} placeholder="Введите фио режиссера" required/>

            </form>

            <div className={s.Footer}>
            <button className={s.Save}> Сохранить</button>
            <button className={s.Delete}> Отменить</button>
        </div>
    </div>


            </div>
        </div>
    );
  };
  
  export default Add;