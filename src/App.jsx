import "./App.css";
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Question from "./components/Question";
import Welcome from "./components/welcome";
import GameOver from "./components/GameOver";

import "./components/welcome.css";



function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="app">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
