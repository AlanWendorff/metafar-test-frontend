import { useEffect, useState } from 'react';
import useSWR from 'swr';
import http from '@configuration/http';
import IStockDetailDTO from './dto/StocksDetail.dto';
import TStockDetailModel from './models/StocksDetail.model';
import stockDetailAdapter from './adapters/StocksDetail.adapter';
import minutesToMiliSeconds from '@utils/minutesToMiliSeconds';

interface IUseGetStockDetailRealtime {
  data: TStockDetailModel | undefined;
  isLoading: boolean;
  error: any;
}

interface IUseGetStockDetailRealtimeProps {
  symbol: string;
  updateInterval: string;
}

const useGetStockDetailRealtime = ({ symbol, updateInterval }: IUseGetStockDetailRealtimeProps): IUseGetStockDetailRealtime => {
  const {
    data: dataRaw,
    error,
    isLoading,
    isValidating
  } = useSWR<IStockDetailDTO>(`/time_series?symbol=${symbol}&interval=${updateInterval}min`, http.get, {
    refreshInterval: minutesToMiliSeconds(updateInterval),
    revalidateOnFocus: false
  });

  const [data, setData] = useState<TStockDetailModel | undefined>(undefined);

  useEffect(() => {
    if (dataRaw && !error) {
      setData(stockDetailAdapter(dataRaw));
    }
  }, [dataRaw, isValidating]);

  return { data, isLoading, error };
};

export default useGetStockDetailRealtime;
