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
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<TStockDetailModel | undefined>(undefined);

  const apiEndpoint = dateRange
    ? `/time_series?symbol=${symbol}&interval=5min&start_date=${isoDateWithoutTimeZone(dateRange[0])}&end_date=${isoDateWithoutTimeZone(
        dateRange[1]
      )}`
    : `/time_series?symbol=${symbol}&interval=5min&date=today`;

  const { data: dataRaw, error: errorToFetch, isLoading, isValidating } = useSWR<IStockDetailDTO>(apiEndpoint, http.get);

  useEffect(() => {
    setError(dataRaw?.message ? dataRaw?.message : null);
    setError(errorToFetch ? String(errorToFetch) : null);

    if (dataRaw && !error && !dataRaw?.message) {
      setData(stockDetailAdapter(dataRaw));
    }
  }, [errorToFetch, dataRaw, isValidating, dateRange]);

  return { data, isLoading, error };
};

export default useGetStockDetailHistoric;
