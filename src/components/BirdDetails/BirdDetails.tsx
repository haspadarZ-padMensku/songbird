import * as React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import IBird from '../../models/IBird';

interface Props {
  bird: IBird;
}

function BirdDetails({ bird }: Props) {
  return (
    <div className='bird-details'>
      <Card className='card'>
        <CardActionArea>
          <CardMedia className='media' image={bird.image} title='Bird' />
          <audio className='audio' controls src={bird.audio} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h5'>
              {bird.name}
            </Typography>
            <Typography gutterBottom variant='h6' component='h6'>
              {bird.species}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {bird.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default BirdDetails;
