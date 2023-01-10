import s from './s.module.scss';
import {SearchOutlined} from '@ant-design/icons';

export const SearchBar = props => {
  return (
    <div>
      <div className={s.searchBarBar} type="search">
        <input {...props} placeholder="Поиск..." />
        <button>
          {' '}
          <SearchOutlined />{' '}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
