import { ChangeEvent, FC } from 'react';
import styles from './Search.module.scss';
import EFilterByValues from '@/constants/enum';

interface ISearchProps {
  handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFilterBy: (e: ChangeEvent<HTMLSelectElement>) => void;
  filterByVal: EFilterByValues;
}

const Search: FC<ISearchProps> = ({ handleFilter, handleFilterBy, filterByVal }) => (
  <div className={styles.container}>
    <input className={styles.input} id='filter' type='text' onChange={handleFilter} placeholder='Filter by' />

    <select className={styles.select} defaultValue={filterByVal} onChange={handleFilterBy}>
      <option id={EFilterByValues.NAME} value={EFilterByValues.NAME}>
        name
      </option>
      <option id={EFilterByValues.SYMBOL} value={EFilterByValues.SYMBOL}>
        symbol
      </option>
    </select>
  </div>
);

export default Search;
