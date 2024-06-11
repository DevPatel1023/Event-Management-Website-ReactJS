import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const EventCard = ({ event }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={event.image || 'https://source.unsplash.com/random'}
        alt={event.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <EventAvailableIcon fontSize="small" /> {event.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
