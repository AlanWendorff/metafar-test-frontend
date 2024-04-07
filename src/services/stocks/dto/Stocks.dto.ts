interface IStocksDTO {
  data: IDataDTO[];
  count: number;
  status: string;
}

interface IDataDTO {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
}

export default IStocksDTO;
