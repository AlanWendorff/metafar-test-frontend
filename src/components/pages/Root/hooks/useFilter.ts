import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { filterStocks } from '@/redux/stocks/states/stocks';
import { TStockListModel } from '@services/stocks/models/Stocks.model';
import { EFilterByValues } from '@constants/enum';
import { DebouncedState, useDebouncedCallback } from 'use-debounce';

interface IUseFilterReturn {
  filterByVal: EFilterByValues;
  handleFilterDebounced: DebouncedState<(inputVal: string) => void>;
  handleFilterBy: (e: ChangeEvent<HTMLSelectElement>) => void;
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

  const handleFilter = (inputVal: string) => {
    dispatch(
      filterStocks({
        stockList,
        inputVal,
        filterByVal
      })
    );
  };

  const handleFilterDebounced = useDebouncedCallback(handleFilter, 1000);

  return {
    filterByVal,
    handleFilterDebounced,
    handleFilterBy
  };
};

export default useFilter;
