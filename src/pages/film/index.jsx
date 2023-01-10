import {CopyOutlined, EditOutlined} from '@ant-design/icons';
import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import poster from './poster.jpg';
import style from './style.module.scss';
import axios from 'axios';

const Film = props => {
  const [film, setFilm] = useState('');

  const params = useParams();

  useEffect(() => {
    async function getFilm() {
      const gottenFilm = await axios.get('http://localhost:8080/movies/' + params.id);
      return gottenFilm;
    }
    getFilm().then(data => setFilm(data.data));
  }, [params]);

  return (
    <div>
      <div className={'col-6'}>
        <div className={style.Header}>
          <div className={style.Id}>
            {' '}
            Id:{params.id} <CopyOutlined />
          </div>
          <Link to={`/film/${params.id}/edit`} className={style.Edit}>
            <div className={style.Edit}>
              {' '}
              <EditOutlined /> Редактировать{' '}
            </div>
          </Link>
        </div>
        <div className={style.Info}>
          <div className={style.imgBox}>
            <img src={`${film.posterUrl}`} className={style.Poster}></img>
          </div>
          <div className={style.InfoText}>
            <h1 className={style.Name}>{film.title}</h1>
            <div className={style.Autor}>{film.director}</div>
            <div className={style.Wrapper}>
              <div className={style.Parametrs}>
                <div className={style.Year}>
                  <h2 className={style.titleParams}> Год производства: </h2>
                  {film.year}
                </div>
                <div className={style.Genre}>
                  <h2 className={style.titleParams}> Жанр: </h2>
                  {film.genres ? film.genres.map(genre => genre + ' ') : ''}
                </div>
                <div className={style.Runtime}>
                  <h2 className={style.titleParams}> Продолжительность: </h2>
                  {film.runtime}
                </div>
              </div>
              <div className={style.Actors}>
                В главных ролях:
                <div className={style.nameActors}>{film.actors}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.Description}>
          <h2 className={style.D1}>Описание</h2>
          <p className={style.Text}>{film.plot}</p>
        </div>
      </div>
    </div>
  );
};

export default Film;
