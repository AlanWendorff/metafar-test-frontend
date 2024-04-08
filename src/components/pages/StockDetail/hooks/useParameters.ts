import { useState, ChangeEvent } from 'react';
import { EUpdateInterval } from '@/constants/enum';
import TDateRange, { TDate } from '@/types/DateRange.type';

interface IUseParametersReturn {
  updateInterval: EUpdateInterval;
  dateRange: TDateRange;
  handleUpdateInterval: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSetDataRange: (dates: TDate) => void;
}

interface IUseParametersProps {}

const useParameters = (): IUseParametersReturn => {
  const [updateInterval, setUpdateInterval] = useState(EUpdateInterval.ONE);
  const [dateRange, setDateRange] = useState<TDateRange>([new Date(), new Date()]);

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

  const handleSetDataRange = (dates: TDate) => {
    setDateRange(dates);
  };

  return {
    updateInterval,
    dateRange,
    handleUpdateInterval,
    handleSetDataRange
  };
};

export default useParameters;
