import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { TDetailModel } from '@/services/stockDetail/models/StocksDetail.model';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import tableOptions from '../../configuration/TableOptions';
import useGetStockDetailHistoric from '@services/stockDetail/useGetStockDetailHistoric';
import TDateRange from '@/types/DateRange.type';

interface IHistoricTimeTableProps {
  dateRange: TDateRange | undefined;
  handleSetDetail: (detail: TDetailModel | undefined) => void;
}

const HistoricTimeTable: FC<IHistoricTimeTableProps> = ({ dateRange, handleSetDetail }) => {
  const { symbol } = useParams();
  const { data, error } = useGetStockDetailHistoric({
    symbol: String(symbol),
    dateRange
  });

  useEffect(() => {
    handleSetDetail(data?.detail);
  }, [data]);

  return (
    <>
      {error && <h1>{String(error)}</h1>}
      {data && (
        <HighchartsReact
          highcharts={Highcharts}
          options={tableOptions(
            `${symbol} - ${data?.detail.currency}  ${!dateRange ? ' | today' : ''}`,
            String(data?.detail.currency),
            data?.prices
          )}
        />
      )}
    </>
  );
};
export default HistoricTimeTable;
