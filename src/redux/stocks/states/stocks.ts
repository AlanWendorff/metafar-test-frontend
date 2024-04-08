import { createSlice } from '@reduxjs/toolkit';
import TStocksModel from '@services/stocks/models/Stocks.model';
import TFilterPayload from '../types/FilterPayload.type';
import filterDataBy from '@utils/filterDataBy.utils';

const initialState: TStocksModel = {
  stock_list: [
    {
      symbol: '',
      name: '',
      currency: '',
      type: ''
    }
  ]
};

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setStocks: (state, action) => {
      state.stock_list = action.payload;
    },
    filterStocks: (state, action) => {
      const { stockList, inputVal, filterByVal }: TFilterPayload = action.payload;

      const filteredStocks = filterDataBy(stockList, inputVal)[filterByVal];
      state.stock_list = filteredStocks;
    }
  }
});

export const { setStocks, filterStocks } = stocksSlice.actions;
export default stocksSlice.reducer;
