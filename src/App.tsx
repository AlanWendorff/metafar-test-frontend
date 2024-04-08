import { Provider } from 'react-redux';
import { FC } from 'react';
import Layout from '@shared/Layout';
import store from './redux/store';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

const App: FC = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
