import { TDetailModel } from '@/services/stockDetail/models/StocksDetail.model';
import { useState } from 'react';

interface IUseStockDetailReturn {
  detail: TDetailModel | undefined;
  handleSetDetail: (detail: TDetailModel | undefined) => void;
}

const useStockDetail = (): IUseStockDetailReturn => {
  const [detail, setDetail] = useState<TDetailModel | undefined>(undefined);

  const handleSetDetail = (detail: TDetailModel | undefined) => {
    setDetail(detail);
  };

  return { detail, handleSetDetail };
};

export default useStockDetail;
