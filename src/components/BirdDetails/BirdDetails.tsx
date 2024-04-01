import React from 'react';
import Bird from '../../models/Bird';

interface Props {
  bird: Bird | null;
}

function BirdDetails({ bird }: Props) {
  if (!bird) {
    return (
      <div className="bird-details">
        <div className="message">Please choose a bird form the list</div>
      </div>
    );
  }
  return (
    <div className="bird-details">
      <div className="info">
        <div className="row">
          <div className="image-container">
            <div className="image-wrapper">
              <img className="image" src={bird.image} alt="Bird" />
            </div>
          </div>
          <div className="short-info">
            <div className="name">{bird.name}</div>
            <div className="type">{bird.species}</div>
            <audio className="audio" controls src={bird.audio} />
          </div>
        </div>
        <div className="full-info">
          <div className="description">{bird.description}</div>
        </div>
      </div>
    </div>
  );
}

export default BirdDetails;
