import { useEffect, useState } from 'react';
import useSWR from 'swr';
import http from '@configuration/http';
import TDateRange from '@/types/DateRange.type';
import IStockDetailDTO from './dto/StocksDetail.dto';
import TStockDetailModel from './models/StocksDetail.model';
import stockDetailAdapter from './adapters/StocksDetail.adapter';
import isoDateWithoutTimeZone from '@utils/isoDateWithoutTimeZone';

interface IUseGetStockDetailHistoric {
  data: TStockDetailModel | undefined;
  isLoading: boolean;
  error: any;
}

interface IUseGetStockDetailHistoricProps {
  symbol: string;
  dateRange: TDateRange | undefined;
}

const useGetStockDetailHistoric = ({ symbol, dateRange }: IUseGetStockDetailHistoricProps): IUseGetStockDetailHistoric => {
  const apiEndpoint = dateRange
    ? `/time_series?symbol=${symbol}&interval=5min&start_date=${isoDateWithoutTimeZone(dateRange[0])}&end_date=${isoDateWithoutTimeZone(
        dateRange[1]
      )}`
    : `/time_series?symbol=${symbol}&interval=5min&date=today`;

  const { data: dataRaw, error, isLoading, isValidating } = useSWR<IStockDetailDTO>(apiEndpoint, http.get);

  const [data, setData] = useState<TStockDetailModel | undefined>(undefined);

  useEffect(() => {
    if (dataRaw && !error) {
      setData(stockDetailAdapter(dataRaw));
    }
  }, [dataRaw, isValidating, dateRange]);

  return { data, isLoading, error };
};

export default useGetStockDetailHistoric;
