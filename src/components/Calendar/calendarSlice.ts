import { createSlice } from "@reduxjs/toolkit";
import { CalendarData } from "./CalendarData"; 
import { getInitialCalendarState } from "./calendarUtils";


export interface CalendarAction {
    type: string;
}



export function calendarReducer(state: CalendarData, action: CalendarAction) {
    switch (action.type) {
        case "incrementMonth":
            state.incrementMonth();
            break;
        case "decrementMonth":
            state.decrementMonth();
            break;
        case "incrementYear":
            state.incrementYear();
            break;
        case "decrementYear":
            state.decrementYear();
            break;
    }
}



export const calendarSlice = createSlice({
    name: "calendar",
    initialState: getInitialCalendarState(),
    reducers: {
        CalendarReducer()
        // incrementMonth: (state) => state.incrementMonth(),
        // decrementMonth: (state) => state.decrementMonth(),
    },
})
