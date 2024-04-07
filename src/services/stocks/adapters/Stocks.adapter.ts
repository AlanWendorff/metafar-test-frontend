import IStocksDTO from '../dto/Stocks.dto';
import TStocksModel from '../models/Stocks.model';

const stocksAdapter = (dto: IStocksDTO): TStocksModel => ({
  stock_list: dto.data.map(({ symbol, currency, name, type }) => ({
    symbol,
    name,
    currency,
    type
  }))
});

export default stocksAdapter;
