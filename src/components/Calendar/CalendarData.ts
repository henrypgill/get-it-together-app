import { DbUserData } from "../../../../get-it-together-server/src/types";
import { getCalendarDaysOfMonth, getFirstDayOfMonth } from "./calendarUtils";

export class CalendarData {
    year: number;
    monthIndex: number;
    days: CalendarDay[];

    constructor(currentDate?: Date) {
        const date = getFirstDayOfMonth(currentDate ?? new Date());

        this.year = date.getFullYear();
        this.monthIndex = date.getMonth();
        this.days = getCalendarDaysOfMonth(date.getFullYear(), date.getMonth());
    }

    setYear = (targetYear: number) => {
        this.year = targetYear;
        this.updateDays();
    };
    setMonth = (targetMonthIndex: number) => {
        this.monthIndex = targetMonthIndex;
        this.updateDays();
    };

    incrementYear = (n = 1) => {
        this.year += n;
        this.updateDays();
    };
    decrementYear = (n = 1) => {
        this.year -= n;
        this.updateDays();
    };

    incrementMonth(n = 1) {
        if (this.monthIndex === 11) {
            this.incrementYear();
            this.monthIndex = 0;
        } else {
            this.monthIndex += n;
        }
        this.updateDays();
    }
    decrementMonth(n = 1) {
        if (this.monthIndex === 11) {
            this.incrementYear();
            this.monthIndex = 0;
        } else {
            this.monthIndex -= n;
        }
        this.updateDays();
    }

    updateDays() {
        this.days = getCalendarDaysOfMonth(this.year, this.monthIndex);
    }
}

interface CalendarDayUpdate {
    year: number;
    month: number;
    number: number;
    weekIndex: number;
    dayIndex: number;
    users?: DbUserData[];
}

export class CalendarDay {
    date: Date;
    weekIndex: number; //index of the week of the month e.g. week1=1
    dayIndex: number; //index of the day of the week e.g. monday=1

    constructor(
        year: number,
        month: number,
        day: number,
        weekIndex: number,
        dayIndex: number
    ) {
        this.date = new Date(year, month, day);
        this.weekIndex = weekIndex;
        this.dayIndex = dayIndex;
    }

    update(newDay: CalendarDayUpdate) {
        this.date.setFullYear(newDay.year);
        this.date.setMonth(newDay.month);
        this.date.setDate(newDay.number);
    }
}
