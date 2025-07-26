import CounterButton from "./CounterButton.tsx";
import {useAdvancedCounter} from "../hooks/useAdvancedCounter.ts";

const CounterAdvancedWithCustomHook = () => {

    //custom hook function
    const {count, increase, decrease, reset, lastAction, time } = useAdvancedCounter();

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
export default CounterAdvancedWithCustomHook;