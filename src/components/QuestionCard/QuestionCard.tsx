import React from 'react';
import unknown from '../../images/unknown.png';

interface Props {
  image: string;
  name: string;
  audio: string;
  correct: boolean;
}

function QuestionCard({ image, name, audio, correct }: Props) {
  return (
    <div className="question-card">
      <div className="image-container">
        <div className="image-wrapper">
          <img className="image" src={correct ? image : unknown} alt="Bird" />
        </div>
      </div>
      <div className="info">
        <div className="name">{correct ? name : '********'}</div>
        <audio className="audio" controls src={audio} />
      </div>
    </div>
  );
}

export default QuestionCard;
