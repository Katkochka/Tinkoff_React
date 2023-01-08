import SearchBar from '../search/index';
import { Card } from '../card-film';
import s from './s.module.scss';


export const List = () => {
    return (
    <div className={s.List}>
        <SearchBar/>
         <Card/>
    </div> 
    );
  };