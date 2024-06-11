import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import EventCard from './EventCard';

const events = [
  {
    id: 1,
    title: 'Event One',
    description: 'This is a description for event one.',
    date: '2024-06-15',
    image: 'https://source.unsplash.com/random/1',
  },
  {
    id: 2,
    title: 'Event Two',
    description: 'This is a description for event two.',
    date: '2024-06-20',
    image: 'https://source.unsplash.com/random/2',
  },
  {
    id: 3,
    title: 'Event Three',
    description: 'This is a description for event three.',
    date: '2024-06-25',
    image: 'https://source.unsplash.com/random/3',
  },
];

const EventList = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventList;
