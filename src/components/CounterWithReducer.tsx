import CounterButton from "./CounterButton.tsx";
// import {useCounter} from "../hooks/useCounter.ts";
import { useCounterWithReducer} from "../hooks/useCounterWithReducer.ts";

const CounterWithReducer=()=>{

    //custom hook function
    // const {count, increase, decrease, reset } = useCounter();
    const {count,lastAction, time, increase, decrease, reset} = useCounterWithReducer();

    return(
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onclick={increase} label="Increase" />
                    <CounterButton onclick={decrease} disabled={count === 0} label="Decrease" />
                    <CounterButton onclick={reset} disabled={count === 0} label="Reset" addClass="bg-cf-dark-red text-black" />
                </div>
            </div>
            <p className="text-center pt-8">Last Change:<strong>{lastAction || ""}</strong> At: <strong>{time || ""}</strong></p>
        </>
    )
}
export default CounterWithReducer;