import IStockDetailDTO from '../dto/StocksDetail.dto';
import TStockDetailModel from '../models/StocksDetail.model';

const stockDetailAdapter = (dto: IStockDetailDTO): TStockDetailModel => ({
  detail: {
    currency: dto.meta.currency,
    symbol: dto.meta.symbol,
    type: dto.meta.type
  },
  prices: dto.values.map(({ close }) => parseFloat(close)).reverse()
});

export default stockDetailAdapter;
