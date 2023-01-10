import {CopyOutlined, EditOutlined} from '@ant-design/icons';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import s from './s.module.scss';

const Add = () => {
  const [film, setFilm] = useState([]);

  const [title, setTitle] = useState([]);
  const [year, setYear] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [runtime, setRuntime] = useState([]);
  const [plot, setPlot] = useState([]);
  const [posterUrl, setPosterUrl] = useState([]);
  const [actors, setActors] = useState([]);
  const [director, setDirector] = useState([]);

  async function getGenres() {
    const gottenGenres = await axios.get('http://localhost:8080/genres');
    return gottenGenres.data;
  }

  useEffect(() => {
    async function asyncFunction() {
      const gottenGenres = await getGenres();
      setGenresList(gottenGenres);
    }
    asyncFunction();
  }, []);

  const addNewFilms = e => {
    e.preventDefault();
    const newFilm = {
      id: Date.now(),
      title,
      year,
      genres: genres.split(','),
      runtime,
      plot,
      posterUrl,
      actors,
      director,
    };
    setFilm(newFilm);
    postFilm(newFilm);
  };

  async function postFilm(newFilm) {
    await axios.post('http://localhost:8080/movies', newFilm);
  }

  return (
    <div className={'col-9'}>
      <div className={s.Add}>
        <h1 className={s.Edit}>Редактрирование / Создание</h1>

        <form className={s.Form}>
          <h2 className={s.FormName}> Название фильма </h2>
          <input
            type="text"
            className={s.Form__input}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Введите название фильма"
            required
          />

          <h2 className={s.FormName}> Год </h2>
          <input
            type="text"
            className={s.Form__input}
            value={year}
            onChange={e => setYear(e.target.value)}
            placeholder="Укажите год"
            required
          />

          <h2 className={s.FormName}> Жанр </h2>
          <select className={s.Form__input} required value={genres} onChange={e => setGenres(e.target.value)}>
            <option disabled selected="Жанр">
              {' '}
              {}
            </option>
            {genresList.map(genre => (
              <option>{genre}</option>
            ))}
          </select>

          <h2 className={s.FormName}> Продолжительность </h2>
          <input
            type="text"
            className={s.Form__input}
            value={runtime}
            onChange={e => setRuntime(e.target.value)}
            placeholder="Укажите продолжительность"
            required
          />

          <h2 className={s.FormName}> Описание </h2>
          <textarea
            type="text"
            rows="3"
            style={{resize: 'none'}}
            className={s.Form__input}
            value={plot}
            onChange={e => setPlot(e.target.value)}
            placeholder="Введите описание"
            required
          />

          <h2 className={s.FormName}> Обложка </h2>
          <input
            type="text"
            className={s.Form__input}
            value={posterUrl}
            onChange={e => setPosterUrl(e.target.value)}
            placeholder="Укажите ссылку на обложку"
            required
          />

          <h2 className={s.FormName}> Укажите список актеров </h2>
          <input
            type="text"
            className={s.Form__input}
            value={actors}
            onChange={e => setActors(e.target.value)}
            placeholder="Введите актеров через ;"
            required
          />

          <h2 className={s.FormName}> Режиссер </h2>
          <input
            type="text"
            className={s.Form__input}
            value={director}
            onChange={e => setDirector(e.target.value)}
            placeholder="Введите фио режиссера"
            required
          />
        </form>

        <div className={s.Footer}>
          <button className={s.Save} type="submit" onClick={addNewFilms}>
            {' '}
            Сохранить
          </button>
          <Link to="/">
            <button className={s.Delete}> Отменить</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Add;
