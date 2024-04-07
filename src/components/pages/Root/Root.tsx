import { FC } from 'react';
import styles from './Root.module.scss';
import useGetStocks from '@/services/stocks/useGetStocks';
import Table from './components/Table';

const Root: FC = () => {
  const { data, isLoading } = useGetStocks();

  return (
    <div className={styles.container}>
      <h1>Stock List</h1>

      <Table stocks={data?.stock_list} isLoading={isLoading} />
    </div>
  );
};

export default Root;
