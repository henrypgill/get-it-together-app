import { DayCard } from "./DayCard";
import "../../styles/Calendar.css";
import "../../styles/DayCard.css";
import { useState } from "react";
import { getCalendarDaysOfMonth, getMonthName } from "./calendarUtils";

export function Calendar(): JSX.Element {
    // const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2022, 3, 5))
    const [currentMonth, setCurrentMonth] = useState<Date>(getCurrentMonth());

    const daysOfMonth = getCalendarDaysOfMonth(currentMonth);

    function getNextMonth(month: Date): Date {
        const nextMonth = new Date(month.getTime());
        const nextMonthIndex = month.getMonth() + 1;
        nextMonth.setMonth(nextMonthIndex);
        return nextMonth;
    }

    function getPrevMonth(month: Date): Date {
        const nextMonth = new Date(month.getTime());
        const nextMonthIndex = month.getMonth() - 1;
        nextMonth.setMonth(nextMonthIndex);
        return nextMonth;
    }

    function handleNextMonthClick() {
        setCurrentMonth((prev) => getNextMonth(prev));
    }
    function handlePrevMonthClick() {
        setCurrentMonth((prev) => getPrevMonth(prev));
    }

    console.log(currentMonth.getMonth());

    return (
        <div className="calendar-section-content">
            <div className="calendar-container">
                <div className="month-year-container">
                    <button className="year-button">{"<"}</button>
                    <h2>{getMonthName(currentMonth.getMonth())}</h2>
                    <h2>2023</h2>
                    <button className="year-button">{">"}</button>
                </div>
                <div className="month-view">
                    <button
                        className="month-button"
                        onClick={() => handlePrevMonthClick()}
                    >
                        {"<"}
                    </button>
                    <div className="days-grid">
                        <h3 className="day-heading calendar-cell-0-1">
                            Monday
                        </h3>
                        <h3 className="day-heading calendar-cell-0-2">
                            Tuesday
                        </h3>
                        <h3 className="day-heading calendar-cell-0-3">
                            Wednesday
                        </h3>
                        <h3 className="day-heading calendar-cell-0-4">
                            Thursday
                        </h3>
                        <h3 className="day-heading calendar-cell-0-5">
                            Friday
                        </h3>
                        <h3 className="day-heading calendar-cell-0-6">
                            Saturday
                        </h3>
                        <h3 className="day-heading calendar-cell-0-7">
                            Sunday
                        </h3>
                        {daysOfMonth.map((day) => (
                            <DayCard
                                key={day.cell}
                                index={day.num}
                                cell={day.cell}
                            />
                        ))}
                    </div>
                    <button
                        className="month-button"
                        onClick={() => handleNextMonthClick()}
                    >
                        {">"}
                    </button>
                </div>
            </div>
            <div>
                <h2>people</h2>
                <ul>
                    <li>Elise (host)</li>
                    <li>James</li>
                    <li>Will</li>
                    <li>Mary</li>
                    <li>Tharo</li>
                    <li>Eylea</li>
                    <li>Masha</li>
                </ul>
            </div>
        </div>
    );
}
