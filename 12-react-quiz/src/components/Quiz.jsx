import { useState } from "react";
import QUESTIONS from "../questions";

import qiuzIsComplitedImg from "../assets/quiz-logo.png";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;
  // console.log(quizIsCompleted);

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      console.log(prevUserAnswers);
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={qiuzIsComplitedImg} alt="trophy icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  //
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Quiz;
