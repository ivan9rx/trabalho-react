import "./App.css";
import { useContext, useEffect } from "react";
import Question from "./components/Question";
import { QuizContext } from "./context/quiz";
import "./components/welcome.css";
import Welcome from "./components/welcome";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="app">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "playing" && <Question />}
    </div>
  );
}

export default App;
