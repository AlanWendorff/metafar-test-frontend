import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IAppStore } from '@/redux/store';
import DataTable from 'react-data-table-component';
import COLUMNS from './configuration/Columns';
import styles from './Table.module.scss';

interface ITableProps {
  isLoading: boolean;
}

const Table: FC<ITableProps> = ({ isLoading }) => {
  const stockList = useSelector((state: IAppStore) => state.stocks.stock_list);

  return (
    <div className={styles.container}>
      <DataTable columns={COLUMNS} data={stockList} progressPending={isLoading} pagination />
    </div>
  );
};

export default Table;
