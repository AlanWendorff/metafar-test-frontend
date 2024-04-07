import { FC } from 'react';
import { TStockListModel } from '@/services/stocks/models/Stocks.model';
import DataTable from 'react-data-table-component';
import styles from './Table.module.scss';

interface ITableProps {
  stocks: TStockListModel[] | undefined;
  isLoading: boolean;
}

const columns = [
  {
    name: 'Symbol',
    selector: (row: { symbol: string }) => row.symbol
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

const Table: FC<ITableProps> = ({ stocks, isLoading }) => (
  <div className={styles.container}>
    <DataTable columns={columns} data={stocks ?? []} progressPending={isLoading} pagination />
  </div>
);

export default Table;
