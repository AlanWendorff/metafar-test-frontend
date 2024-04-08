import { FC } from 'react';
import { ROOT } from '@/constants/routes';
import LinkTo from '@/components/elements/LinkTo';
import Detail from './components/Detail';

import styles from './StockDetail.module.scss';

const StockDetail: FC = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      <LinkTo to={ROOT}>Go Back</LinkTo>|<h1>Stock Detail</h1>
    </div>
    <Detail />
  </div>
);

export default StockDetail;
