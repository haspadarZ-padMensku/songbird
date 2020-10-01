import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components';
import BirdDetails from './components/BirdDetails/BirdDetails';
import QuestionCard from './components/QuestionCard/QuestionCard';
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
  const [userAnswer, setUserAnswer] = useState<IBird | null>(null);

  useEffect(() => {
    if (step === 1) {
      setQuestion(generateQuestion(0));
    }
  }, [step, generateQuestion]);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('checkAnswer');
  };

  const onNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('next q');
    if (step >= 6) {
      setGameOver(true);
    } else {
      setCorrect(false);
      const nextQuestion = generateQuestion(step);
      setQuestion(nextQuestion);
      setStep(step + 1);
    }
  };

  const startNewGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('startNewGame');
    setCorrect(false);
    setGameOver(false);
    setScore(0);
    setUserAnswer(null);
    setStep(1);
  };

  return (
    <div className='App'>
      <Header score={score} />
      {gameOver ? (
        <div>Game Over.</div>
      ) : (
        <div className='playground'>
          {question && (
            <QuestionCard
              image={question.correctAnswer.image}
              name={question.correctAnswer.name}
              audio={question.correctAnswer.audio}
              correct={correct}
            />
          )}
          {userAnswer && <BirdDetails bird={userAnswer} />}
        </div>
      )}
      {gameOver ? (
        <button onClick={startNewGame}>Try again</button>
      ) : (
        <div className='buttons'>
          <button onClick={onNext}>Next</button>
          <button onClick={() => setCorrect(!correct)}>correct</button>
        </div>
      )}
    </div>
  );
};

export default App;
