type TStockDetailModel = {
  detail: TDetailModel;
  prices: number[];
};

export type TDetailModel = {
  symbol: string;
  currency: string;
  type: string;
};

export default TStockDetailModel;
