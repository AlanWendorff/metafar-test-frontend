interface IStockDetailDTO {
  meta: IMetaDTO;
  values: IValuesDTO[];
  message: string;
  status: string;
}

export interface IMetaDTO {
  symbol: string;
  interval: string;
  currency: string;
  exchange_timezone: string;
  exchange: string;
  mic_code: string;
  type: string;
}

export interface IValuesDTO {
  datetime: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export default IStockDetailDTO;
