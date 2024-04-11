import { TStockListModel } from '@/services/stocks/models/Stocks.model';
import { EFilterByValues } from '@/constants/enum';

const filterDataBy = (stockList: TStockListModel[], value: string) => ({
  [EFilterByValues.NAME]: stockList.filter(({ name }) => name.toLowerCase().includes(value)),
  [EFilterByValues.SYMBOL]: stockList.filter(({ symbol }) => symbol.toUpperCase().includes(value.toUpperCase()))
});

export default filterDataBy;
