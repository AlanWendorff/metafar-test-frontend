import { Provider } from 'react-redux';
import { FC } from 'react';
import Layout from '@shared/Layout';
import store from './redux/store';

const App: FC = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
