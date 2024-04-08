import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterStocks, setStocks } from '@/redux/stocks/states/stocks';
import store from '@/redux/store';
import useGetStocks from '@/services/stocks/useGetStocks';
import Table from './components/Table';
import Search from './components/Search';
import EFilterByValues from '@/constants/enum';
import styles from './Root.module.scss';

const Root: FC = () => {
  const { data, isLoading } = useGetStocks();

  const dispatch = useDispatch();

  /* 
  Move to custom hook or zustand
  */

  const [filterByVal, setFilterByVal] = useState(EFilterByValues.NAME);

  const handleFilterBy = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case `${EFilterByValues.NAME}`:
        setFilterByVal(EFilterByValues.NAME);
        break;

      case `${EFilterByValues.SYMBOL}`:
        setFilterByVal(EFilterByValues.SYMBOL);
        break;
    }
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      filterStocks({
        inputVal: e.target.value,
        filterByVal
      })
    );
  };

  useEffect(() => {
    dispatch(setStocks(data?.stock_list));
  }, [data]);

  console.log(store.getState().stocks.stock_list);

  return (
    <div className={styles.container}>
      <h1>Stock List</h1>

      {data && <Search handleFilter={handleFilter} handleFilterBy={handleFilterBy} filterByVal={filterByVal} />}

      <Table stocks={store.getState().stocks.stock_list} isLoading={isLoading} />
    </div>
  );
};

export default Root;
