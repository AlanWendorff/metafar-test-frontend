import http from '@configuration/http';
import useSWR from 'swr';
import IStocksDTO from './dto/Stocks.dto';
import TStocksModel from './models/Stocks.model';
import stocksAdapter from './adapters/Stocks.adapter';

interface IUseGetStocks {
  data: TStocksModel | undefined;
  isLoading: boolean;
  error: any;
}

const useGetStocks = (): IUseGetStocks => {
  const { data: dataRaw, error, isLoading } = useSWR<IStocksDTO>('/stocks', http.get);

  const data = dataRaw && stocksAdapter(dataRaw);

  return { data, isLoading, error };
};

export default useGetStocks;
