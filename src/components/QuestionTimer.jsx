import { useState,useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
    const[ remainingTime, setRemainingTime] = useState(timeout);
    


    useEffect(() => {
        console.log("set timeout")
        const timer = setTimeout(onTimeout, timeout);

        return (() => {
            clearTimeout(timer);
        })
    },[timeout,onTimeout])

    useEffect(() => {
        console.log("set interval")

        const interval = setInterval(() =>{
        setRemainingTime(preRemainingTime => preRemainingTime - 100)
    },100)

        return () => {
            clearInterval(interval);
        };

    }, []);




     

    return(
        <progress 
        id="question-time" 
        max={timeout} 
        value={remainingTime} 
        className={mode}
        
        /> 

    );
}



export default QuestionTimer;