import { ChangeEvent, FC } from 'react';
import { EChartControl, EUpdateInterval } from '@constants/enum';
import TDateRange, { TDate } from '@/types/DateRange.type';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import TChartControl from '@/types/ChartControl.type';
import styles from './Controls.module.scss';

interface IControlsProps {
  updateInterval: EUpdateInterval;
  dateRange: TDateRange | undefined;
  controlState: TChartControl;
  handleUpdateInterval: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSetDataRange: (dates: TDateRange) => void;
  handleSetControlState: (active: EChartControl) => void;
}

const Controls: FC<IControlsProps> = ({
  updateInterval,
  dateRange,
  controlState,
  handleSetDataRange,
  handleUpdateInterval,
  handleSetControlState
}) => (
  <div className={styles.container}>
    <div className={styles.top}>
      <button onClick={() => handleSetControlState(EChartControl.REALTIME)} aria-label='Ver grafico en tiempo real'>
        Tiempo real
      </button>
      <button onClick={() => handleSetControlState(EChartControl.HISTORIC)} aria-label='Ver configuracion para grafico histórico'>
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
        <DateRangePicker
          onChange={(value: TDateRange | TDate) => {
            handleSetDataRange(value as TDateRange);
          }}
          value={dateRange}
        />
      </div>
    )}
  </div>
);

export default Controls;
