import React from 'react';
import IBird from '../../models/IBird';

interface Props {
  answers: IBird[];
  correctAnswer: IBird;
  userAnswer: string | null;
  mistakes: string[] | [];
  callback: (e: React.MouseEvent<HTMLElement>) => void;
}

function Answers({ answers, correctAnswer, userAnswer, mistakes, callback }: Props) {
  return (
    <ul className="answer-list">
      {answers.map((item) => (
        <li className="answer-item" key={item.id} onClick={callback}>
          {mistakes.find((name) => item.name === name) ? (
            <span className="red-circle" />
          ) : (
            <>
              {userAnswer === correctAnswer.name && userAnswer === item.name ? (
                <span className="green-circle" />
              ) : (
                <span className="circle" />
              )}
            </>
          )}
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default Answers;
