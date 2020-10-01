import * as React from 'react';

interface Props {
  score: number;
  callback: () => void;
}

const MAX_POINTS = 30;

function GameOverScreen({ score, callback }: Props) {
  return (
    <div className="game-over-screen">
      <div>
        Congratulations! You got {score} points of {MAX_POINTS} possible.
      </div>
      <button className="button" onClick={callback}>
        Try again
      </button>
    </div>
  );
}

export default GameOverScreen;
