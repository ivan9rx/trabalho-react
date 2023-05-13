import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Quiz from "../img/quiz.svg";

const welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem vindo</h2>
      <p>clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        iniciar
      </button>
      <img src={Quiz} alt="inicio do quiz" />
    </div>
  );
};

export default welcome;
