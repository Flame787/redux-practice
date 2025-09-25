import { createStore } from 'redux';

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'increase'){
        return {
            counter: state.counter + action.amount
        }   // added action.amount - amount is extra property of action, it's payload (payload can be dynamic, modular)
    }
    if (action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }
    return state;
};

const store = createStore(counterReducer);

export default store;