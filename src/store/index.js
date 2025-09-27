// import { createStore, combineReducers } from 'redux';  // createStore - deprecated, danas se koristi configureStore (iz Redux Toolkita)
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //   state.counter = state.counter + action.amount;
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// new slice of the state:

const initialAuthState = {
  isAuthenticated: false,
};

// creating new state-slice:
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
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

// Earlier store-creation:

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// configureStore ne predajemo 1 glavnu reducer-funkciju, kako prije kod createStore funkcije, nego mu predajemo
// 1 configuration-object, u kojem postavljamo reducer-property. Value za reducer-property može biti: 1 reducer funkcija,
// ili ako imamo multiple state slices -> onda object s nekim keyevima, i svaki ima kao value neku reducer-funkciju:
// npr. reducer: { counter: counterSlice.reducer, user: userSlice.reducer, auth: authSlice.reducer}

// merging 2 reducer-functions together:
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// counterSlice.actions.toggleCounter
// toggleCounter - action-creator method, jer automatski kreira action-object, s type-propertyjem

export const counterActions = counterSlice.actions;
// + new state-slice-actions:
export const authActions = authSlice.actions;

export default store;
