import IStockDetailDTO from '../dto/StocksDetail.dto';
import TStockDetailModel from '../models/StocksDetail.model';

const stockDetailAdapter = (dto: IStockDetailDTO): TStockDetailModel => ({
  detail: {
    currency: dto.meta.currency,
    symbol: dto.meta.symbol,
    type: dto.meta.type
  },
  values: dto.values.map(({ datetime, close }) => ({
    datetime,
    close
  })),
  valuesCandle: dto.values.map(({ datetime, high, low, close, open }) => [
    String(new Date(datetime).getTime() / 1000),
    open,
    high,
    low,
    close
  ]),
  onlyPrice: dto.values.map(({ close }) => parseFloat(close)).reverse()
});

export default stockDetailAdapter;
