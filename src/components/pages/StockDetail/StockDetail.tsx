import { FC } from 'react';
import { ROOT } from '@/constants/routes';
import LinkTo from '@/components/elements/LinkTo';
import Detail from './components/Detail';
import Controls from './components/Controls';
import useChartParameters from './hooks/useChartParameters';

import styles from './StockDetail.module.scss';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const StockDetail: FC = () => {
  const { dateRange, updateInterval, handleSetDataRange, handleUpdateInterval } = useChartParameters();

  const options = {
    title: {
      text: 'Lorem Ipsum'
    },
    series: [
      {
        data: [1, 2, 3]
      }
    ]
  };

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

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default StockDetail;
