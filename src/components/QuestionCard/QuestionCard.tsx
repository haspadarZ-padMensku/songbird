import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

interface Props {
  image: string;
  name: string;
  audio: string;
  correct: boolean;
}

const QuestionCard: React.FC<Props> = ({ image, name, audio, correct }) => {
  console.log({ image, name, audio, correct });
  return (
    <div className='question-card'>
      <Card className='card'>
        <CardActionArea>
          <CardMedia className={correct ? 'media' : 'media-blur'} image={image} title='Bird' />
          <audio className='audio' controls src={audio} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h5'>
              {correct ? name : '********'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default QuestionCard;
