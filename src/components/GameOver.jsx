import React from "react";
import "./GameOver.css";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import welldone from "../img/welldone.svg";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score} </p>
      <p>Você acertou {quizState.score} de {quizState.questions.length}</p>
      <img src={welldone} alt="fim do quiz" />
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
