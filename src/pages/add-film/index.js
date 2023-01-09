import { CopyOutlined, EditOutlined  } from '@ant-design/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import s from "./s.module.scss"


const Add = () => {
    const [genres, setGenres] = useState([]);

    async function getGenres() {
        const gottenGenres = await axios.get('http://localhost:8080/genres');
        return gottenGenres.data;
    }

    useEffect(() => {
        async function asyncFunction() {
            const gottenGenres = await getGenres();
            setGenres(gottenGenres);
        }
        asyncFunction();
    }, []);

    return (
        // <div className={'row'}>
            <div className={'col-9'}>
            <div className={s.Add}>
        <h1 className={s.Edit}>Редактрирование / Создание</h1>
    
            <form className={s.Form}>
            <h2 className={s.FormName}> Название фильма </h2>
            <input type='text' className={s.Form__input} placeholder="Введите название фильма" required/>

            <h2 className={s.FormName}> Год </h2>
            <input type='text' className={s.Form__input} placeholder="Укажите год" required/>

            <h2 className={s.FormName}> Жанр </h2>
            <select className={s.Form__input} required>
              <option disabled selected = "Жанр"> {}</option>
              {genres.map(genre => <option>{genre}</option>)}
            </select>

            <h2 className={s.FormName}> Продолжительность </h2>
            <input type='text' className={s.Form__input} placeholder="Укажите продолжительность" required/>  

            <h2 className={s.FormName}> Описание </h2>
            <textarea type='text' rows = "3" style={{resize: 'none'}} className={s.Form__input} placeholder="Введите описание" required/>

            <h2 className={s.FormName}> Обложка </h2>
            <input type='text' className={s.Form__input} placeholder="Укажите ссылку на обложку" required/>

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
        // </div>
    );
  };
  
  export default Add;