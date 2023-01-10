import {CopyOutlined, EditOutlined} from '@ant-design/icons';
import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import poster from './poster.jpg';
import s from './s.module.scss';
import axios from 'axios';

const Film = props => {
  const [film, setFilm] = useState('');

  const params = useParams();

  async function getFilm() {
    const gottenFilm = await axios.get('http://localhost:8080/movies/' + params.id);
    setFilm(gottenFilm.data);
  }

  useEffect(() => {
    async function asyncFunction() {
      await getFilm();
    }
    asyncFunction();
  }, [params]);

  return (
    <div>
      <div className={'col-6'}>
        <div className={s.Header}>
          <div className={s.Id}>
            {' '}
            Id:{params.id} <CopyOutlined />
          </div>
          <Link to="/add-film" className={s.Edit}>
            <div className={s.Edit}>
              {' '}
              <EditOutlined /> Редактировать{' '}
            </div>
          </Link>
        </div>
        <div className={s.Info}>
          <div className={s.imgBox}>
            <img src={`${film.posterUrl}`} className={s.Poster}></img>
          </div>
          <div className={s.InfoText}>
            <h1 className={s.Name}>{film.title}</h1>
            <div className={s.Autor}>{film.director}</div>
            <div className={s.Wrapper}>
              <div className={s.Parametrs}>
                <div className={s.Year}>
                  <h2 className={s.titleParams}> Год производства: </h2>
                  {film.year}
                </div>
                <div className={s.Genre}>
                  <h2 className={s.titleParams}> Жанр: </h2>
                  {film.genres ? film.genres.map(genre => genre + ' ') : ''}
                </div>
                <div className={s.Runtime}>
                  <h2 className={s.titleParams}> Продолжительность: </h2>
                  {film.runtime}
                </div>
              </div>
              <div className={s.Actors}>
                В главных ролях:
                <div className={s.nameActors}>{film.actors}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.Description}>
          <h2 className={s.D1}>Описание</h2>
          <p className={s.Text}>{film.plot}</p>
        </div>
      </div>
    </div>
  );
};

export default Film;
