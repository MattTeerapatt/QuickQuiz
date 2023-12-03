import { useRef } from "react";


const Answers =({ answers, selectedAnswer, answerState, onSelect }) => {
    const shuffledAnswers= useRef();

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
      shuffledAnswers.current.sort(() => Math.random() - 0.5);  
      //random of between 1 and -1 and - 0.5 to get random value that reture + or -
      //to random the order of choice after that sort it
      }
    

    return(
        <ul id="answers">
          {shuffledAnswers.current.map((answer) => {

            const isSelected = selectedAnswer === answer
            let cssClass = "";
            if(answerState === "answered" && isSelected){
                cssClass ="selected";
            }
            if((answerState === "correct" || answerState ==="wrong") && 
                isSelected
                ){
                cssClass =  answerState;
            }

            return (
                <li key={answer} className="answer">
                <button 
                onClick={() => onSelect(answer)} 
                className={cssClass} 
                disabled={answerState !== ""}
                
                >
                  {answer}
                </button>
              </li>
            );
          }

          )}
        </ul>
    );
}

export default Answers;