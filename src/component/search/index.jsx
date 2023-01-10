import style from './style.module.scss';
import {SearchOutlined} from '@ant-design/icons';

export const SearchBar = props => {
  return (
    <div>
      <div className={style.searchBarBar} type="search">
        <input {...props} placeholder="Поиск..." />
          <SearchOutlined />{' '}
      </div>
    </div>
  );
};

export default SearchBar;
