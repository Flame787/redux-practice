import { createStore } from 'redux';  // createStore - deprecated, danas se koristi configureStore (iz Redux Toolkita)

const initialState = {counter: 0, showCounter: true};

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment'){
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'increase'){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }   // added action.amount - amount is extra property of action, it's payload (payload can be dynamic, modular)
    }
    if (action.type === 'decrement'){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    // added new toggle-action-type:
    if (action.type === 'toggle'){
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    return state;
};

const store = createStore(counterReducer);

export default store;