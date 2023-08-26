import { DayCard } from "./DayCard";
import "../../styles/Calendar.css";
import "../../styles/DayCard.css";
import { getMonthName } from "./calendarUtils";
import store from "../../redux/store";
import { calendarSlice } from "../../redux/calendarSlice";

export function Calendar(): JSX.Element {
    const calendarState = store.getState().calendar;

    function handleNextMonthClick() {
        store.dispatch(calendarSlice.actions.incrementMonth());
    }
    function handlePrevMonthClick() {
        store.dispatch(calendarSlice.actions.decrementMonth());
    }
    function handleNextYearClick() {
        store.dispatch(calendarSlice.actions.incrementYear());
    }
    function handlePrevYearClick() {
        store.dispatch(calendarSlice.actions.decrementYear());
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
                    <h2>2023</h2>
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
                        {calendarState.days.map((calendarDay) => (
                            <DayCard
                                date={calendarDay.date}
                                weekIndex={calendarDay.weekIndex}
                                dayIndex={calendarDay.dayIndex}
                                key={`${calendarDay.date.getTime()}`}
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
