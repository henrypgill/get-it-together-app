export interface CalendarData {
    year: number;
    monthIndex: number;
    days: CalendarDay[];
}

export interface CalendarDay {
    date: Date;
    weekIndex: number; //index of the week of the month e.g. week1=1
    dayIndex: number; //index of the day of the week e.g. monday=1
}
