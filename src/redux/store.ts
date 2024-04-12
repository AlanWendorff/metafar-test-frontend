import { configureStore } from '@reduxjs/toolkit';
import { stocksSlice } from './stocks/states/stocks';
import TStocksModel from '@services/stocks/models/Stocks.model';

export interface IAppStore {
  stocks: TStocksModel;
}

export default configureStore<IAppStore>({
  reducer: {
    stocks: stocksSlice.reducer
  }
});
