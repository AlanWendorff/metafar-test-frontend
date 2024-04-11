import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { EUpdateInterval } from '@/constants/enum';
import { TDetailModel } from '@/services/stockDetail/models/StocksDetail.model';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import tableOptions from '../../configuration/TableOptions';
import useGetStockDetailRealtime from '@services/stockDetail/useGetStockDetailRealtime';

interface IRealTimeTableProps {
  updateInterval: EUpdateInterval;
  handleSetDetail: (detail: TDetailModel | undefined) => void;
}

const RealTimeTable: FC<IRealTimeTableProps> = ({ updateInterval, handleSetDetail }) => {
  const { symbol } = useParams();
  const { data, error } = useGetStockDetailRealtime({
    symbol: String(symbol),
    updateInterval: String(updateInterval)
  });

  useEffect(() => {
    handleSetDetail(data?.detail);
  }, [data]);

  return (
    <>
      {error && <h1>{error}</h1>}
      {data && (
        <HighchartsReact highcharts={Highcharts} options={tableOptions(String(symbol), String(data?.detail.currency), data?.prices)} />
      )}
    </>
  );
};
export default RealTimeTable;
