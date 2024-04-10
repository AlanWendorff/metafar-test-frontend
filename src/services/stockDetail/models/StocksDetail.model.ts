type TStockDetailModel = {
  detail: TDetailModel;
  values: TValuesModel[];
  valuesCandle: string[][];
  onlyPrice: number[];
};

export type TDetailModel = {
  symbol: string;
  currency: string;
  type: string;
};

export type TValuesModel = {
  datetime: string;
  close: string;
};

export default TStockDetailModel;
