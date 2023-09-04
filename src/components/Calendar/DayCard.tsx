import { CalendarDay } from "../../core/CalendarData";

// type DayCardProps =

interface DayCardProps extends Partial<CalendarDay> {
    date: Date;
    weekIndex: number;
    dayIndex: number;
}

export function DayCard({
    date,
    weekIndex,
    dayIndex,
}: DayCardProps): JSX.Element {
    return (
        <button className={`day-card calendar-cell-${weekIndex}-${dayIndex}`}>
            <h3>{date.getDate()}</h3>
            <div className="user-list-container"></div>
            <ul className="day-users-list">
                <li>james</li>
                <li>holly</li>
            </ul>
        </button>
    );
}
