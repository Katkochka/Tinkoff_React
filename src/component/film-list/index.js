import SearchBar from '../search/index';
import { Card } from '../card-film';
import s from './s.module.scss';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Footer } from '../footer';


export const List = () => {
    const [films, setFilms] = useState([]);
    // const [searchedFilms, setSearchedFilms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    async function getFilms() {
      const gottenFilms = await axios.get('http://localhost:8080/movies');
      return gottenFilms.data;
    }

    // .toLowerCase().includes(searchQuery.toLowerCase())
    // let searchedFilms = useMemo(() => {
    //     return films.filter(film => film.title.toLowerCase().includes(searchQuery.toLowerCase()));
    // }, [searchQuery]);

    useEffect( () => {
      const asyncFunction = async () => {
        const gottenFilms = await getFilms();
        setFilms(gottenFilms);
      }
      asyncFunction();
    }, []);

    async function searchPost() {
      const gottenFilms = await axios.get('http://localhost:8080/movies?title_like=' + searchQuery);
      return gottenFilms.data;
    }

    useEffect(() =>{
      async function asyncFunction() {
        const searchedFilms = await searchPost();
        setFilms(searchedFilms);
      }
      asyncFunction();
    }, [searchQuery])

    return (
    <div className={s.List}>
        <SearchBar
          value = {searchQuery}
          onChange = {e => setSearchQuery(e.target.value)}
        />
        {films? films.slice(0, 14).map(film => <Link to={'/film/' + film.id}  className={s.Link}><Card film={film} /></Link>): ''}
        <Footer/>
    </div> 
    );
  };