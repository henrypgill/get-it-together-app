import { DbUserData } from "../../../../get-it-together-server/src/types";
import {
    getCalendarDaysOfMonth,
    getFirstDayOfMonth,
} from "./calendarUtils";

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

    incrementYear = () => {
        this.year++;        
        this.updateDays();
    }
    decrementYear = () => {
        this.year--;
        this.updateDays();
    }

    incrementMonth() {
        if (this.monthIndex === 11) {
            this.incrementYear();
            this.monthIndex = 0;
        } else {
            this.monthIndex++;
        }
        this.updateDays();
    }
    decrementMonth() {
        if (this.monthIndex === 11) {
            this.incrementYear();
            this.monthIndex = 0;
        } else {
            this.monthIndex--;
        }
        this.updateDays();
    }

    updateDays() {
        this.days = getCalendarDaysOfMonth(this.year, this. monthIndex)
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
    weekIndex: number;
    dayIndex: number;

    constructor(year: number, month: number, day: number, weekIndex: number, dayIndex: number) {
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
