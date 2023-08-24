import { DbUserData } from "../../../../get-it-together-server/src/types";

export interface CalendarAction {
    property: keyof DateState;
    value: number;//number | MonthIndex | Day | Hour | Minute | Second //DateState[keyof DateState];
}

export type MonthName =
    | "january"
    | "february"
    | "march"
    | "april"
    | "may"
    | "june"
    | "july"
    | "august"
    | "september"
    | "october"
    | "november"
    | "december";

export type DayName = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export type MonthIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface Month {
    name: MonthName;
    index: MonthIndex;
}

export type Day = 
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
| 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23
| 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
export type Hour =
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;

export type Minute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17
    | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36
    | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55
    | 56 | 57 | 58 | 59;
export type Second = Minute;



// export interface CalendarData {
//     year: number;
//     monthIndex: number;
//     days: CalendarDay[];

// }

// export interface CalendarDay {
//     date: Date;
//     number: number;
//     dayIndex: number;
//     weekIndex: number;
//     users?: DbUserData[];
// }


// export interface DateState {
//     year: number;
//     month: MonthIndex;
//     day: Day;
//     hour: Hour;
//     minute: Minute;
//     second: Second;
//     millisecond: number;
// }

// export class CalendarDate {
//     year: number;
//     month: number;
//     day: number;
//     hour: number;
//     minute: number;C
//     second: number;
//     millisecond: number;
// }

// export interface CalendarData {
//     currentYear: number;
//     currentMonth: CalendarMonth;
//     calendarDate: Date;

// }

// export interface CalendarMonth {
//     monthIndex: number;//MonthIndex;
//     // monthName: string;//MonthName;
//     // monthDayCount: number;
//     days: CalendarDay[];
// }

// export interface CalendarDay {
//     number: number;
//     dayIndex: number;
//     weekIndex: number;
//     date: Date;
//     users?: DbUserData[];
//     }