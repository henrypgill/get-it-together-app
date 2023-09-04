import { createSlice } from "@reduxjs/toolkit";
import { getInitialCalendarState } from "../core/calendarUtils";
// import { CalendarData } from "../components/Calendar/CalendarData";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CalendarPayload {
    value: number;
}

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: getInitialCalendarState(),
    reducers: {
        stepYear: {
            reducer: (state, action: PayloadAction<CalendarPayload>) => {
                state.stepYear(action.payload.value);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
        stepMonth: {
            reducer: (state, action: PayloadAction<CalendarPayload>) => {
                state.stepMonth(action.payload.value);
            },
            prepare: (value: number) => {
                return { payload: { value } };
            },
        },
    },
});

// export const calendasrSlice = createSlice({
//     name: "calendar",
//     initialState: getInitialCalendarState(),
//     reducers: {
//         incrementYear: incrementYear(state) {
//             state.incrementYear();
//         },
//         decrementYear(state) {
//             state.decrementYear();
//         },
//         incrementMonth(state) {
//             state.incrementMonth();
//         },
//         decrementMonth(state) {
//             state.decrementMonth();
//         },
//         setYear(state, action) {
//             state.setYear(action.payload.value);
//         },
//         setMonth(state, action) {
//             state.setMonth(action.payload.value);
//         },
//     },
// });

// export const calendarSlice = createSlice({
//     name: "calendar",
//     initialState: getInitialCalendarState(),
//     reducers: {
//         calendarReducer
//     },
// });
