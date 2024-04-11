import { ChangeEvent, FC } from 'react';
import styles from './Search.module.scss';
import { EFilterByValues } from '@/constants/enum';
import { DebouncedState } from 'use-debounce';

interface ISearchProps {
  handleFilter: DebouncedState<(inputVal: string) => void>;
  handleFilterBy: (e: ChangeEvent<HTMLSelectElement>) => void;
  filterByVal: EFilterByValues;
}

const Search: FC<ISearchProps> = ({ handleFilter, handleFilterBy, filterByVal }) => (
  <div className={styles.container}>
    <input
      className={styles.input}
      id='filter'
      type='text'
      onChange={(e) => {
        handleFilter(e.target.value);
      }}
      placeholder={`Filter by ${filterByVal}`}
    />

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
