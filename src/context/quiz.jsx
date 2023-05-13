import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STAGES = ["start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
}


export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = { name: "Quiz" }

    return < QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}