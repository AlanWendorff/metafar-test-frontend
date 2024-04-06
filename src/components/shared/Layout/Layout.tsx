import { FC } from 'react';
import { ROOT, STOCK_DETAIL } from '@constants/routes';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Root from '@pages/Root';
import NotFound from '@pages/NotFound';
import StockDetail from '@pages/StockDetail';

const Layout: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROOT} element={<Root />} />
      <Route path={STOCK_DETAIL} element={<StockDetail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Layout;
