import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { Answers, BirdDetails, GameOverScreen, Header, QuestionCard } from './components';
import birdsData from './data/birdsData';
import IBird from './models/IBird';
import IQuestion from './models/IQuestion';

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const shuffleAnswers = (answers: IBird[]) => [...answers].sort(() => Math.random() - 0.5);

const App = () => {
  const [score, setScore] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);

  const generateQuestion = useCallback((group: number) => {
    const answers = birdsData[group];
    const correctAnswer = answers[getRandomInt(answers.length)];
    const currentQuestion: IQuestion = {
      correctAnswer,
      answers: shuffleAnswers(answers),
    };
    return currentQuestion;
  }, []);

  const [question, setQuestion] = useState<IQuestion | null>(null);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState<string[]>([]);

  useEffect(() => {
    if (step === 1) {
      setQuestion(generateQuestion(0));
    }
  }, [step, generateQuestion]);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('checkAnswer');
  };

  const onNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (step >= 6) {
      setGameOver(true);
    } else {
      setCorrect(false);
      const nextQuestion = generateQuestion(step);
      setQuestion(nextQuestion);
      setStep(step + 1);
      setMistakes([]);
    }
  };

  const startNewGame = () => {
    setCorrect(false);
    setGameOver(false);
    setScore(0);
    setMistakes([]);
    setUserAnswer(null);
    setStep(1);
  };

  const chooseAnswer = (e: React.MouseEvent<HTMLElement>) => {
    if (!correct) {
      setUserAnswer(e.currentTarget.innerText);
      if (e.currentTarget.innerText === question?.correctAnswer.name) {
        setCorrect(true);
        setScore(score + (5 - mistakes.length));
      } else {
        setMistakes([...mistakes, e.currentTarget.innerText]);
      }
    }
  };

  return (
    <div className="App">
      <Header score={score} step={step} />
      {gameOver ? (
        <GameOverScreen score={score} callback={startNewGame} />
      ) : (
        <div className="playground">
          {question && (
            <QuestionCard
              image={question.correctAnswer.image}
              name={question.correctAnswer.name}
              audio={question.correctAnswer.audio}
              correct={correct}
            />
          )}
          <div className="row">
            {question && (
              <Answers
                answers={question.answers}
                correctAnswer={question.correctAnswer}
                userAnswer={userAnswer}
                mistakes={mistakes}
                callback={chooseAnswer}
              />
            )}
            {question && <BirdDetails bird={question.answers.find((item) => item.name === userAnswer) || null} />}
          </div>
          {!gameOver && (
            <button className="button" onClick={onNext} disabled={!correct}>
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
