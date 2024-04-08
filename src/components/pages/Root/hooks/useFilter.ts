import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { filterStocks } from '@/redux/stocks/states/stocks';
import { TStockListModel } from '@/services/stocks/models/Stocks.model';
import EFilterByValues from '@/constants/enum';

interface IUseFilterReturn {
  filterByVal: EFilterByValues;
  handleFilterBy: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IUseFilterProps {
  stockList: TStockListModel[] | undefined;
}

const useFilter = ({ stockList }: IUseFilterProps): IUseFilterReturn => {
  const dispatch = useDispatch();
  const [filterByVal, setFilterByVal] = useState(EFilterByValues.NAME);

  const handleFilterBy = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case `${EFilterByValues.NAME}`:
        setFilterByVal(EFilterByValues.NAME);
        break;

      case `${EFilterByValues.SYMBOL}`:
        setFilterByVal(EFilterByValues.SYMBOL);
        break;
    }
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      filterStocks({
        stockList,
        inputVal: e.target.value,
        filterByVal
      })
    );
  };

  return {
    filterByVal,
    handleFilter,
    handleFilterBy
  };
};

export default useFilter;
