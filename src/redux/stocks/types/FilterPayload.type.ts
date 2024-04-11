import { TStockListModel } from '@/services/stocks/models/Stocks.model';
import { EFilterByValues } from '@/constants/enum';

type TFilterPayload = {
  stockList: TStockListModel[];
  inputVal: string;
  filterByVal: EFilterByValues;
};

export default TFilterPayload;
