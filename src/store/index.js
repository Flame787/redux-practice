// import { createStore, combineReducers } from 'redux';  // createStore - deprecated, danas se koristi configureStore (iz Redux Toolkita)
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     }; // added action.amount - amount is extra property of action, it's payload (payload can be dynamic, modular)
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   // added new toggle-action-type:
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: counterSlice.reducer,
});
// configureStore ne predajemo 1 glavnu reducer-funkciju, kako prije kod createStore funkcije, nego mu predajemo
// 1 configuration-object, u kojem postavljamo reducer-property. Value za reducer-property može biti: 1 reducer funkcija,
// ili ako imamo multiple state slices -> onda object s nekim keyevima, i svaki ima kao value neku reducer-funkciju:
// npr. reducer: { counter: counterSlice.reducer, user: userSlice.reducer, theme: themeSlice.reducer}

export default store;
