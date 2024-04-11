import { TDate } from '@/types/DateRange.type';

const isoDateWithoutTimeZone = (date: TDate) => date?.toISOString().substring(0, 10);

export default isoDateWithoutTimeZone;
