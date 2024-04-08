import TStocksModel from '@services/stocks/models/Stocks.model';
import { configureStore } from '@reduxjs/toolkit';
import { stocksSlice } from './stocks/states/stocks';

export interface IAppStore {
  stocks: TStocksModel;
}

export default configureStore<IAppStore>({
  reducer: {
    stocks: stocksSlice.reducer
  }
});
