import { DayCard } from "./DayCard";
import "../../styles/Calendar.css";
import "../../styles/DayCard.css";
import { getMonthName } from "../../core/calendarUtils";
import store from "../../core/store";
import { calendarSlice } from "../../core/calendarSlice";
import { CalendarDayHeadings } from "./CalendarDayHeadings";

import { useSelector } from "react-redux";
import { CalendarData } from "../../app";

interface RootState {
    calendar: CalendarData;
}

export function Calendar(): JSX.Element {
    // const calendarState = store.getState().calendar;
    const calendarState = useSelector((state: RootState) => state.calendar);

    function handleNextMonthClick() {
        store.dispatch(calendarSlice.actions.stepMonth(1));
    }
    function handlePrevMonthClick() {
        store.dispatch(calendarSlice.actions.stepMonth(-1));
    }
    function handleNextYearClick() {
        store.dispatch(calendarSlice.actions.stepYear(1));
    }
    function handlePrevYearClick() {
        store.dispatch(calendarSlice.actions.stepYear(-1));
    }

    return (
        <div className="calendar-section-content">
            <div className="calendar-container">
                <div className="month-year-container">
                    <button
                        className="year-button"
                        onClick={() => handlePrevYearClick()}
                    >
                        {"<"}
                    </button>
                    <h2>{getMonthName(calendarState.monthIndex)}</h2>
                    <h2>{calendarState.year}</h2>
                    <button
                        className="year-button"
                        onClick={() => handleNextYearClick()}
                    >
                        {">"}
                    </button>
                </div>
                <div className="month-view">
                    <button
                        className="month-button"
                        onClick={() => handlePrevMonthClick()}
                    >
                        {"<"}
                    </button>
                    <div className="days-grid">
                        {<CalendarDayHeadings />}
                        {calendarState.days.map((calendarDay) => (
                            <DayCard
                                date_number={calendarDay.date}
                                weekIndex={calendarDay.weekIndex}
                                dayIndex={calendarDay.dayIndex}
                                key={`${calendarDay.date}`}
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
