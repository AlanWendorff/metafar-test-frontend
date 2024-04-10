import { STOCK_DETAIL } from '@/constants/routes';
import { TStockListModel } from '@/services/stocks/models/Stocks.model';
import { TableColumn } from 'react-data-table-component';
import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';

const COLUMNS: TableColumn<TStockListModel>[] = [
  {
    name: 'Symbol',
    selector: (row: { symbol: string }) => row.symbol,
    cell: (row) => <Link to={generatePath(STOCK_DETAIL, { symbol: row.symbol, name: row.name })}>{row.symbol}</Link>
  },
  {
    name: 'Name',
    selector: (row: { name: string }) => row.name
  },
  {
    name: 'Currency',
    selector: (row: { currency: string }) => row.currency
  },
  {
    name: 'Type',
    selector: (row: { type: string }) => row.type
  }
];

export default COLUMNS;
