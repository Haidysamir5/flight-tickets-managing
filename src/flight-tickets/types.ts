export interface FlightItemType {
  id: string;
  code: string;
  date: string;
  capacity: number;
}

type FlightItemKeyType = keyof FlightItemType;
