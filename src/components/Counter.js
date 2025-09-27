import { useSelector, useDispatch } from "react-redux";

import { counterActions } from '../store/index';

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
    // increment - metoda koja, kad je pozvana, kreira action-object s typeom = automatski postavljeni action-identifier
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });    // {type: xy, payload: 5}
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      {/* only rendering this <div> if 'show'-state is true */}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
