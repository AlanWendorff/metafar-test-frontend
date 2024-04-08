import { FC } from 'react';
import useGetStocks from '@/services/stocks/useGetStocks';
import useFilter from './hooks/useFilter';
import Table from './components/Table';
import Search from './components/Search';
import styles from './Root.module.scss';

const Root: FC = () => {
  const { data, isLoading } = useGetStocks();
  const { filterByVal, handleFilterDebounced, handleFilterBy } = useFilter({ stockList: data?.stock_list });

  return (
    <div className={styles.container}>
      <h1>Stock List</h1>

      {data && <Search handleFilter={handleFilterDebounced} handleFilterBy={handleFilterBy} filterByVal={filterByVal} />}

      <Table isLoading={isLoading} />
    </div>
  );
};

export default Root;
