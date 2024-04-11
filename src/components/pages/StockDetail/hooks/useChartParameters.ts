import { useState, ChangeEvent } from 'react';
import { EChartControl, EUpdateInterval } from '@constants/enum';
import TDateRange from '@/types/DateRange.type';
import TChartControl from '@/types/ChartControl.type';

interface IUseChartParametersReturn {
  updateInterval: EUpdateInterval;
  dateRange: TDateRange | undefined;
  controlState: TChartControl;
  handleUpdateInterval: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSetDataRange: (dates: TDateRange) => void;
  handleSetControlState: (active: EChartControl) => void;
}

const useChartParameters = (): IUseChartParametersReturn => {
  const [controlState, setControlState] = useState({
    realtime: true,
    historic: false
  });
  const [updateInterval, setUpdateInterval] = useState(EUpdateInterval.ONE);
  const [dateRange, setDateRange] = useState<TDateRange | undefined>(undefined);

  const handleUpdateInterval = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case `${EUpdateInterval.ONE}`:
        setUpdateInterval(EUpdateInterval.ONE);
        break;

      case `${EUpdateInterval.FIVE}`:
        setUpdateInterval(EUpdateInterval.FIVE);
        break;

      case `${EUpdateInterval.FIFTEEN}`:
        setUpdateInterval(EUpdateInterval.FIFTEEN);
        break;
    }
  };

  const handleSetDataRange = (dates: TDateRange) => {
    setDateRange(dates);
  };

  const handleSetControlState = (active: EChartControl) => {
    switch (active) {
      case EChartControl.REALTIME:
        setControlState({
          realtime: true,
          historic: false
        });
        break;

      case EChartControl.HISTORIC:
        setControlState({
          realtime: false,
          historic: true
        });
        break;
    }
  };

  return {
    updateInterval,
    dateRange,
    controlState,
    handleUpdateInterval,
    handleSetDataRange,
    handleSetControlState
  };
};

export default useChartParameters;
