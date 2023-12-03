import quizlogo from "../assets/quiz-logo.png"

const Header = () => {
    return(
        <header>
            <img src={quizlogo}/>
            <h1>Quiz</h1>
        </header>
    );
}


export default Header;