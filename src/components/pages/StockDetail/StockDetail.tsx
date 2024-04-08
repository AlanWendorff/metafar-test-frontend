import { FC } from 'react';
import { ROOT } from '@/constants/routes';
import LinkTo from '@/components/elements/LinkTo';
import Detail from './components/Detail';
import Controls from './components/Controls';
import useParameters from './hooks/useParameters';

import styles from './StockDetail.module.scss';

const StockDetail: FC = () => {
  const { dateRange, updateInterval, handleSetDataRange, handleUpdateInterval } = useParameters();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <LinkTo to={ROOT}>Go Back</LinkTo>|<h1>Stock Detail</h1>
      </div>
      <Detail />

      <Controls
        updateInterval={updateInterval}
        dateRange={dateRange}
        handleSetDataRange={handleSetDataRange}
        handleUpdateInterval={handleUpdateInterval}
      />
    </div>
  );
};
export default StockDetail;
