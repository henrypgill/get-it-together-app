// import { createAction, createReducer } from '@reduxjs/toolkit'
// import { CalendarData } from '../../components/Calendar/CalendarData'
// import { getInitialCalendarState } from '../../components/Calendar/calendarUtils'

// interface EmentPayload {
//     value: number;
// }

// const incrementYear = createAction("incrementYear", function prepare(value: number) {
//     const payload: EmentPayload = {
//         value: value,
//     }
//     return {payload: payload}
// });
// const decrementYear = createAction("decrementYear", function prepare(value: number) {
//     const payload: EmentPayload = {
//         value: value,
//     }
//     return {payload: payload}
// });
// const incrementMonth = createAction("incrementMonth", function prepare(value: number) {
//     const payload: EmentPayload = {
//         value: value,
//     }
//     return {payload: payload}
// });
// const decrementMonth = createAction("decrementMonth", function prepare(value: number) {
//     const payload: EmentPayload = {
//         value: value,
//     }
//     return {payload: payload}
// });

// // const incrementYear = createAction("incrementYear");
// // const decrementYear = createAction("decrementYear");
// // const incrementMonth = createAction("incrementMonth");
// // const decrementMonth = createAction("decrementMonth");

// export const calendarReducer = createReducer<CalendarData>(getInitialCalendarState(), (builder) => {
//     builder
//       .addCase(incrementYear, (state, action) => {
//         state.incrementYear();
//         // !action.payload.value ? state.incrementYear() : state.incrementYear(action.payload.value);

//       })
//       .addCase(decrementYear, (state, action) => {
//         state.decrementYear();
//       })
//       .addCase(incrementMonth, (state, action) => {
//         state.incrementMonth()
//       })
//       .addCase(decrementMonth, (state, action) => {
//         state.decrementMonth()
//       })
//   })
