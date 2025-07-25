import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const CounterWithMoreStates = () => {
    const[count,setCount]=useState(0);
    const [lastAction, SetLastAction]=useState("");
    const [time, setTime]=useState("");

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const increaseCount=() => {
        setCount(count+1);
        SetLastAction("Increase Count");
        setTime(getCurrentTime());
    }

    const resetCount= () => {
        setCount(0);
        SetLastAction("Reset Count");
        setTime(getCurrentTime());
    }

    const decreaseCount= () => {
        if(count>0){
            setCount(count-1);
            SetLastAction("Decrease Count");
            setTime(getCurrentTime());
        }
    }

    return(
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onclick={increaseCount} label="Increase" />
                    <CounterButton onclick={decreaseCount} disabled={count === 0} label="Decrease" />
                    <CounterButton onclick={resetCount} disabled={count === 0} label="Reset" addClass="bg-cf-dark-red text-black" />
                </div>
            </div>
            <p className="text-center pt-8">Last Change:<strong>{lastAction}</strong> At: <strong>{time || ""}</strong></p>
        </>
    )

}

export default CounterWithMoreStates;