import { useEffect, useState } from 'react';
import http from '@configuration/http';
import useSWR from 'swr';
import IStockDetailDTO from './dto/StocksDetail.dto';
import TStockDetailModel from './models/StocksDetail.model';
import stockDetailAdapter from './adapters/StocksDetail.adapter';
import minutesToMiliSeconds from '@/utils/minutesToMiliSeconds';

interface IUseGetStockDetail {
  data: TStockDetailModel | undefined;
  isLoading: boolean;
  error: any;
}

interface IUseGetStockDetailProps {
  symbol: string;
  updateInterval: string;
}

const useGetStockDetail = ({ symbol, updateInterval }: IUseGetStockDetailProps): IUseGetStockDetail => {
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<TStockDetailModel | undefined>(undefined);

  const {
    data: dataRaw,
    error: errorToFetch,
    isLoading
  } = useSWR<IStockDetailDTO>(`/time_series?symbol=${symbol}&interval=${updateInterval}min`, http.get, {
    refreshInterval: minutesToMiliSeconds(updateInterval)
  });

  useEffect(() => {
    dataRaw?.message && setError(dataRaw?.message);
    errorToFetch && setError(String(errorToFetch));

    if (dataRaw && !error && !dataRaw?.message) {
      console.log('asign!');
      setData(stockDetailAdapter(dataRaw));
    }
  }, [errorToFetch, dataRaw]);

  return { data, isLoading, error };
};

export default useGetStockDetail;
