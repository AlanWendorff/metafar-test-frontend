import { ChangeEvent, FC, useState } from 'react';
import { EUpdateInterval } from '@/constants/enum';
import styles from './Controls.module.scss';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import TDateRange from '@/types/DateRange.type';

interface IControlsProps {
  updateInterval: EUpdateInterval;
  dateRange: TDateRange;
  handleSetDataRange: (e: any) => void;
  handleUpdateInterval: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Controls: FC<IControlsProps> = ({ updateInterval, dateRange, handleSetDataRange, handleUpdateInterval }) => {
  const [controlState, setControlState] = useState({
    realtime: true,
    historic: false
  });

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <button onClick={() => setControlState({ realtime: true, historic: false })} aria-label='Ver grafico en tiempo real'>
          Tiempo real
        </button>
        <button onClick={() => setControlState({ realtime: false, historic: true })} aria-label='Ver configuracion para grafico histórico'>
          Histórico
        </button>
      </div>

      {controlState.realtime && (
        <select className={styles.select} defaultValue={updateInterval} onChange={handleUpdateInterval}>
          <option id={`${EUpdateInterval.ONE}`} value={EUpdateInterval.ONE}>
            1 minuto
          </option>
          <option id={`${EUpdateInterval.FIVE}`} value={EUpdateInterval.FIVE}>
            5 minutos
          </option>
          <option id={`${EUpdateInterval.FIFTEEN}`} value={EUpdateInterval.FIFTEEN}>
            15 minutos
          </option>
        </select>
      )}

      {controlState.historic && (
        <div className={styles.dateRangeContainer}>
          <DateRangePicker onChange={handleSetDataRange} value={dateRange} />
        </div>
      )}
    </div>
  );
};
export default Controls;
