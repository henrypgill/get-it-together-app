interface DayCardProps {
    index: number;
    cell: string;
}

export function DayCard({ index, cell }: DayCardProps): JSX.Element {
    return (
        <button className={`day-card calendar-cell-${cell}`}>
            <h3>{index}</h3>
            <div className="user-list-container"></div>
            <ul className="day-users-list">
                <li>james</li>
                <li>holly</li>
            </ul>
        </button>
    );
}
