import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// types
import { QuestionState, Difficulty } from './API';
// components
import QuestionCard from './components/QuestionCard';
import AnswerTable from './components/AnswerTable';
// styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  id: number;
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [displayAnswerTable, setDisplayAnswerTable] = useState(false);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);

    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    setDisplayAnswerTable(false);
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = event.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObject: AnswerObject = {
        id: number,
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers(prev => [...prev, answerObject]);
    }
    console.log({ gameOver, loading, userAnswersCount: userAnswers.length })
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion)
    }
  };

  const showAnswerTable = () => setDisplayAnswerTable(true);

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Trivia App</h1>
        {
          gameOver || userAnswers.length === TOTAL_QUESTIONS
            ? (
              <button className="start" onClick={startTrivia}>
                Start Trivia
              </button>
            )
            : null
        }

        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading ? <p>Loading Questions ... </p> : null}
        {
          !loading && !gameOver && !displayAnswerTable
            ? (
              <QuestionCard
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
              />
            )
            : null
        }
        {
          !gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1
            ? (
              <button className="next" onClick={nextQuestion}>
                Next Question
              </button>
            )
            : null
        }

        {
          !gameOver && !loading && userAnswers.length === TOTAL_QUESTIONS && !displayAnswerTable
            ? (
              <button className="next" onClick={showAnswerTable}>
                Display Answer Table
              </button>
            )
            : null
        }

        { displayAnswerTable && !loading ? (<AnswerTable results={userAnswers} score={score}/>) : null }

      </Wrapper >
    </>
  );
}


export default App;
