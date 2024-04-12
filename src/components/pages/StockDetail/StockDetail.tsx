import { FC } from 'react';
import { useParams } from 'react-router';
import { ROOT } from '@constants/routes';
import Detail from './components/Detail';
import Controls from './components/Controls';
import LinkTo from '@/components/elements/LinkTo';
import RealTimeTable from './components/RealTimeTable';
import HistoricTimeTable from './components/HistoricTimeTable';
import useStockDetail from './hooks/useStockDetail';
import useChartParameters from './hooks/useChartParameters';
import styles from './StockDetail.module.scss';

const StockDetail: FC = () => {
  const { name } = useParams();
  const { detail, handleSetDetail } = useStockDetail();
  const { dateRange, updateInterval, controlState, handleSetDataRange, handleUpdateInterval, handleSetControlState } = useChartParameters();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <LinkTo to={ROOT}>Go Back</LinkTo>|<h1>Stock Detail</h1>
      </div>

      {detail && (
        <Detail>
          {detail.symbol} - {name} | {detail.type} - {detail.currency}
        </Detail>
      )}

      {detail && (
        <Controls
          updateInterval={updateInterval}
          dateRange={dateRange}
          controlState={controlState}
          handleSetDataRange={handleSetDataRange}
          handleUpdateInterval={handleUpdateInterval}
          handleSetControlState={handleSetControlState}
        />
      )}

      {controlState.realtime && <RealTimeTable updateInterval={updateInterval} handleSetDetail={handleSetDetail} />}
      {controlState.historic && <HistoricTimeTable dateRange={dateRange} handleSetDetail={handleSetDetail} />}
    </div>
  );
};
export default StockDetail;
