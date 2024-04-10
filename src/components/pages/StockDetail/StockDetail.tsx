import { FC } from 'react';
import { useParams } from 'react-router';
import { ROOT } from '@/constants/routes';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import LinkTo from '@/components/elements/LinkTo';
import useGetStockDetail from '@/services/stockDetail/useGetStockDetail';
import Detail from './components/Detail';
import Controls from './components/Controls';
import useChartParameters from './hooks/useChartParameters';

import styles from './StockDetail.module.scss';

const StockDetail: FC = () => {
  const { name, symbol } = useParams();
  const { dateRange, updateInterval, handleSetDataRange, handleUpdateInterval } = useChartParameters();
  const { data, isLoading, error } = useGetStockDetail({ symbol: String(symbol), updateInterval: String(updateInterval) });

  const options = {
    /*  chart: {
      type: 'columnrange'
    }, */
    title: {
      text: `${symbol} - ${data?.detail.currency}`
    },
    yAxis: {
      title: {
        text: `price ${data?.detail.currency}`
      }
    },

    xAxis: {
      type: 'datetime',
      title: {
        text: 'Time'
      }
    },

    series: [
      {
        data: data?.onlyPrice
      }
    ]
  };

  console.log(data, isLoading);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <LinkTo to={ROOT}>Go Back</LinkTo>|<h1>Stock Detail</h1>
      </div>

      {error && <h1>{error}</h1>}

      {data && (
        <Detail>
          {data.detail.symbol} - {name} | {data.detail.type} - {data.detail.currency}
        </Detail>
      )}

      {data && (
        <Controls
          updateInterval={updateInterval}
          dateRange={dateRange}
          handleSetDataRange={handleSetDataRange}
          handleUpdateInterval={handleUpdateInterval}
        />
      )}

      {data && <HighchartsReact highcharts={Highcharts} options={options} />}
    </div>
  );
};
export default StockDetail;
