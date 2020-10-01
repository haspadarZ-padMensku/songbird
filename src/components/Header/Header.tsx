import * as React from 'react';
import birdsGroups from '../../data/birdsGroups';

interface Props {
  score: number;
}

function Header({ score }: Props) {
  return (
    <div className='header'>
      <div className='info'>
        <div className='logo'>SongBird</div>
        <div className='score'>{score} pts</div>
      </div>
      <div className='question-groups'>
        {birdsGroups.map((group, i) => {
          return (
            <div key={i} className='question-groups-item'>
              {group}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
