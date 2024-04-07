import { FC } from 'react';
import styles from './Root.module.scss';
import useGetStocks from '@/services/stocks/useGetStocks';

const Root: FC = () => {
  const { data } = useGetStocks();

  return (
    <div className={styles.container}>
      <h1>ROOT</h1>
    </div>
  );
};

export default Root;
