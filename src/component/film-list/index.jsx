import {Card} from '../card-film';
import style from './style.module.scss';
import {useEffect, useState, useMemo} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Footer} from '../footer';
import SearchBar from '../search';

export const List = () => {
  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function getFilms() {
      const gottenFilms = await axios.get('http://localhost:8080/movies');
      return gottenFilms.data;
    }
    getFilms().then(data => setFilms(data));
  }, []);

  useEffect(() => {
    async function searchPost() {
      const gottenFilms = await axios.get('http://localhost:8080/movies?title_like=' + searchQuery);
      return gottenFilms.data;
    }
    searchPost().then(data => setFilms(data));
  }, [searchQuery]);

  return (
    <div className={style.List}>
      <SearchBar value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      <ul className={style.Scroll}>
      {films
        ? films.map(film => (
            <Link to={'/film/' + film.id} className={style.Link}>
              {' '}
              <Card film={film} key={film.id} />{' '}
            </Link>
          ))
        : null}         
      </ul>
      <Footer />
    </div>
  );
};
