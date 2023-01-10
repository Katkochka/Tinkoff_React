import {CopyOutlined, EditOutlined} from '@ant-design/icons';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import style from './style.module.scss';

const Add = () => {

  const [genres, setGenres] = useState([]);
  const [formState, setFormState] = useState({
    title:'',
    year:'',
    genres:'',
    runtime:'',
    plot:'',
    posterUrl:'',
    actors:'',
    director:'',
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function getGenres() {
      const gottenGenres = await axios.get('http://localhost:8080/genres');
      return gottenGenres.data;
    }
    getGenres().then(data => setGenres(data));
  }, []);

  const onChangeForm = (e) => {
    if(e.target.name === 'genres'){
      setFormState(prevState => ( { ...prevState, [e.target.name]: e.target.value.split(',') } ));
    } else{
      setFormState(prevState => ( { ...prevState, [e.target.name]: e.target.value } ));
    }
  }

  const addNewFilms = e => {
    e.preventDefault();
    console.log(formState);
    axios.post('http://localhost:8080/movies', formState).then(data => {
      navigate(`/film/${data.data.id}`);
    });
  };

  return (
    <div className={'col-9'}>
      <div className={style.Add}>
        <h1 className={style.Edit}>Создание</h1>

        <form className={style.Form}>
          <h2 className={style.FormName}> Название фильма </h2>
          <input
            type="text"
            className={style.Form__input}
            value={formState.title}
            name ={'title'}
            onChange={onChangeForm}
            placeholder="Введите название фильма"
            required
          />

          <h2 className={style.FormName}> Год </h2>
          <input
            type="text"
            className={style.Form__input}
            name ={'year'}
            value={formState.year}
            onChange={onChangeForm}
            placeholder="Укажите год"
            required
          />

          <h2 className={style.FormName}> Жанр </h2>
          <select className={style.Form__input} required
          name ={'genres'} 
          value={formState.genres} 
          onChange={onChangeForm}>
            <option disabled selected="Жанр">
            </option>
            {genres.map(genre => (
              <option>{genre}</option>
            ))}
          </select>

          <h2 className={style.FormName}> Продолжительность </h2>
          <input
            type="text"
            className={style.Form__input}
            value={formState.runtime}
            name ={'runtime'}
            onChange={onChangeForm}
            placeholder="Укажите продолжительность"
            required
          />

          <h2 className={style.FormName}> Описание </h2>
          <textarea
            type="text"
            rows="3"
            style={{resize: 'none'}}
            className={style.Form__input}
            name ={'plot'}
            value={formState.plot}
            onChange={onChangeForm}
            placeholder="Введите описание"
            required
          />

          <h2 className={style.FormName}> Обложка </h2>
          <input
            type="text"
            className={style.Form__input}
            value={formState.posterUrl}
            name ={'posterUrl'}
            onChange={onChangeForm}
            placeholder="Укажите ссылку на обложку"
            required
          />

          <h2 className={style.FormName}> Укажите список актеров </h2>
          <input
            type="text"
            className={style.Form__input}
            value={formState.actors}
            name ={'actors'}
            onChange={onChangeForm}
            placeholder="Введите актеров через ;"
            required
          />

          <h2 className={style.FormName}> Режиссер </h2>
          <input
            type="text"
            className={style.Form__input}
            value={formState.director}
            name ={'director'}
            onChange={onChangeForm}
            placeholder="Введите фио режиссера"
            required
          />
        </form>

        <div className={style.Footer}>
          <button className={style.Save} type="submit" onClick={addNewFilms}>
            {' '}
            Сохранить
          </button>
          <Link to="/">
            <button className={style.Delete}> Отменить</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Add;
