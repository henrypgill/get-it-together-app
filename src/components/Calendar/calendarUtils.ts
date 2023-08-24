// import { CalendarData, CalendarDay } from "./calendarTypes";
import { CalendarDay, CalendarData } from "./CalendarData";

export function getNumberOfDaysInMonth(monthIndex: number /*MonthIndex*/) {
    // const monthsAndDays = {
    //     january: 31,
    //     february: 28,
    //     march: 31,
    //     april: 30,
    //     may: 31,
    //     june: 30,
    //     july: 31,
    //     august: 31,
    //     september: 30,
    //     october: 31,
    //     november: 30,
    //     december: 31,
    // };
    switch (monthIndex) {
        case 0:
            return 31;
        case 1:
            return 28;
        case 2:
            return 31;
        case 3:
            return 30;
        case 4:
            return 31;
        case 5:
            return 30;
        case 6:
            return 31;
        case 7:
            return 31;
        case 8:
            return 30;
        case 9:
            return 31;
        case 10:
            return 30;
        case 11:
            return 31;
        default:
            return 31;
    }
}

export function getMonthName(monthIndex: number): string {
    switch (monthIndex) {
        case 0:
            return "january";
        case 1:
            return "february";
        case 2:
            return "march";
        case 3:
            return "april";
        case 4:
            return "may";
        case 5:
            return "june";
        case 6:
            return "july";
        case 7:
            return "august";
        case 8:
            return "september";
        case 9:
            return "october";
        case 10:
            return "november";
        case 11:
            return "december";
        default:
            return "incorrect month index, it is zero indexed";
    }
}

export function getFirstDayOfMonth(date: Date): Date {
    const firstDayOfMonth = new Date(date.getTime());
    firstDayOfMonth.setDate(1);
    return firstDayOfMonth;
}

/**
 *
 * @param month the month which you wish to get the CalendarDays for.
 * @returns an array of CalendarDays objects for the given month without their associated users.
 */
export function getCalendarDaysOfMonth(
    year: number,
    monthIndex: number
): CalendarDay[] {
    const firstDayOfMonth = new Date(year, monthIndex, 1);
    const firstDayOfMonthIndex = firstDayOfMonth.getDay();
    const numberOfDaysInMonth = getNumberOfDaysInMonth(monthIndex);
    const days = [];
    let i = 1;
    let weekIndex = 1;
    let dayIndex = firstDayOfMonthIndex;

    while (i <= numberOfDaysInMonth) {
        while (i <= numberOfDaysInMonth && dayIndex <= 7) {
            const newDay = new CalendarDay(
                year,
                monthIndex,
                i,
                dayIndex,
                weekIndex
            );
            days.push(newDay);
            dayIndex++;
            i++;
        }
        weekIndex++;
        dayIndex = 1;
    }

    return days;
}

export function getInitialCalendarState(): CalendarData {
    const currentMonth = getFirstDayOfMonth(new Date());
    const initialState = new CalendarData(currentMonth);
    return initialState;
}

// console.log(firstDayOfMonthIndex)
// console.log(days)

// const minutes = [0, 15, 30, 45];

// const hours = [
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//     20, 21, 22, 23, 24,
// ];

// export function getInitialDate() {

//   const todaysDate = new Date();
//   const todaysYear = todaysDate.getFullYear()
//   const todaysMonth = todaysDate.getMonth()
//   const todaysDay = todaysDate.getDate()
//   const todaysHour = todaysDate.getHours()
//   const todaysMinute = todaysDate.getMinutes()
//   const todaysSecond = todaysDate.getSeconds()
//   const todaysMillisecond = todaysDate.getMilliseconds()

//   const newDate = {
//     year: todaysYear,
//     month: todaysMonth,
//     day: todaysDay,
//     hour: todaysHour,
//     minute: todaysMinute,
//     second: todaysSecond,
//     millisecond: todaysMillisecond,
//   }
// }
