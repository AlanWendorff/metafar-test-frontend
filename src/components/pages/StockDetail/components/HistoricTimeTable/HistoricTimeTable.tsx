import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { TDetailModel } from '@services/stockDetail/models/StocksDetail.model';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Loader from '@/components/elements/Loader';
import tableOptions from '../../configuration/TableOptions';
import useGetStockDetailHistoric from '@services/stockDetail/useGetStockDetailHistoric';
import TDateRange from '@/types/DateRange.type';
import styles from './HistoricTimeTable.module.scss';

interface IHistoricTimeTableProps {
  dateRange: TDateRange | undefined;
  handleSetDetail: (detail: TDetailModel | undefined) => void;
}

const HistoricTimeTable: FC<IHistoricTimeTableProps> = ({ dateRange, handleSetDetail }) => {
  const { symbol } = useParams();
  const { data, isLoading, error } = useGetStockDetailHistoric({
    symbol: String(symbol),
    dateRange
  });

  useEffect(() => {
    handleSetDetail(data?.detail);
  }, [data]);

  return (
    <>
      <Loader active={isLoading} />
      {error && <h1>{String(error)}</h1>}
      {data && (
        <HighchartsReact
          highcharts={Highcharts}
          options={tableOptions(
            `${symbol} - ${data?.detail.currency}  ${dateRange ? '' : ' | today'}`,
            String(data?.detail.currency),
            data?.prices
          )}
          containerProps={{ className: styles.container }}
        />
      )}
    </>
  );
};
export default HistoricTimeTable;
