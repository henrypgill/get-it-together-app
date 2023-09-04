import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendarSlice";
// import { calendarReducer } from "./reducers/calendarReducer";

const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        // calendarReducer
    },
});

export default store;

// console.log(store.dispatch(calendarSlice.actions.decrementMonth()))
