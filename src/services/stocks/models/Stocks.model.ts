type TStocksModel = {
  stock_list: TStockListModel[];
};

export type TStockListModel = {
  symbol: string;
  name: string;
  currency: string;
  type: string;
};

export default TStocksModel;
