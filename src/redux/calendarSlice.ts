import { createSlice } from "@reduxjs/toolkit";
// import { CalendarData, CalendarDay } from "../components/Calendar/CalendarData";
import { getInitialCalendarState } from "../components/Calendar/calendarUtils";

// export interface CalendarAction {
//     type: string;
//     payload: CalendarPayload;
// }

// export interface CalendarPayload {
//     field?: keyof CalendarData;
//     value: number | CalendarDay | CalendarDay[];
// }

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: getInitialCalendarState(),
    reducers: {
        incrementYear(state) {
            state.incrementYear();
        },
        decrementYear(state) {
            state.decrementYear();
        },
        incrementMonth(state) {
            state.incrementMonth();
        },
        decrementMonth(state) {
            state.decrementMonth();
        },
        setYear(state, action) {
            state.setYear(action.payload.value);
        },
        setMonth(state, action) {
            state.setMonth(action.payload.value);
        },
    },
});
