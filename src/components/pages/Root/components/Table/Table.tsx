import { FC } from 'react';
import { TStockListModel } from '@/services/stocks/models/Stocks.model';
import DataTable from 'react-data-table-component';
import COLUMNS from './configuration/Columns';
import styles from './Table.module.scss';

interface ITableProps {
  stocks: TStockListModel[] | undefined;
  isLoading: boolean;
}

const Table: FC<ITableProps> = ({ stocks, isLoading }) => (
  <div className={styles.container}>
    <DataTable columns={COLUMNS} data={stocks ?? []} progressPending={isLoading} pagination />
  </div>
);

export default Table;
