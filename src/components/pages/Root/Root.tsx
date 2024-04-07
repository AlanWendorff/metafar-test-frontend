import { ChangeEvent, FC, useEffect, useState } from 'react';
import useGetStocks from '@/services/stocks/useGetStocks';
import Table from './components/Table';
import Search from './components/Search';
import EFilterByValues from '@/constants/enum';
import styles from './Root.module.scss';

import { TStockListModel } from '@/services/stocks/models/Stocks.model';

const Root: FC = () => {
  const { data, isLoading } = useGetStocks();

  /* 
  Move to custom hook or zustand
  */

  const [filterByVal, setFilterByVal] = useState(EFilterByValues.name);
  const [stockList, setStockList] = useState<TStockListModel[] | undefined>(undefined);

  const handleFilterBy = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterByVal(EFilterByValues[e.target.value as EFilterByValues]);
  };

  const filterData = (stockList: TStockListModel[], value: string) => ({
    [EFilterByValues.name]: stockList.filter(({ name }) => name.toLowerCase().includes(value)),
    [EFilterByValues.symbol]: stockList.filter(({ symbol }) => symbol.toUpperCase().includes(value.toUpperCase()))
  });

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredStocks = data && filterData(data.stock_list, e.target.value)[filterByVal];
    setStockList(filteredStocks);
  };

  useEffect(() => {
    if (!stockList) setStockList(data?.stock_list);
  }, [data]);

  return (
    <div className={styles.container}>
      <h1>Stock List</h1>

      {data && <Search handleFilter={handleFilter} handleFilterBy={handleFilterBy} filterByVal={filterByVal} />}

      <Table stocks={stockList} isLoading={isLoading} />
    </div>
  );
};

export default Root;
