import { Calendar } from "./components/Calendar/Calendar";

export function Main(): JSX.Element {
    return (
        <main>
            <div className="content-container">
                <section className="calendar-section">
                    <Calendar />
                </section>
            </div>
        </main>
    );
}
