import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Avatar,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StarIcon from '@mui/icons-material/Star';
import createEvent from '../Images/CreateEvent.jpg';
import EventManage from '../Images/EventManage.jpg';
import contact from '../Images/Contact.jpg';
import techconference from '../Images/techconference.jpg';
import party from '../Images/RockConcert.jpg';
import AnnualGala from '../Images/AnnualGala.jpg';

const Home = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#3f51b5', color: '#fff', py: 8 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to EventManager
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Your ultimate solution for managing and organizing events seamlessly.
          </Typography>
          <Box textAlign="center">
            <Button variant="contained" color="secondary" size="large">
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={createEvent}
                alt="Create Event"
              />
              <CardContent>
                <EventAvailableIcon fontSize="large" />
                <Typography gutterBottom variant="h5" component="div">
                  Create Event
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Plan and organize events with ease. Manage all your event details in one place.
                </Typography>
                <Box textAlign="center" mt={2}>
                  <Button
                    component={Link}
                    to="/create-event"
                    variant="contained"
                    color="primary"
                  >
                    Create Event
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={EventManage}
                alt="Manage Schedule"
              />
              <CardContent>
                <EventNoteIcon fontSize="large" />
                <Typography gutterBottom variant="h5" component="div">
                  Manage Schedule
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Keep track of your event schedule and ensure everything runs smoothly.
                </Typography>
                <Box textAlign="center" mt={2}>
                  <Button
                    component={Link}
                    to="/manage-schedule"
                    variant="contained"
                    color="primary"
                  >
                    Manage Schedule
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={contact}
                alt="Contact Support"
              />
              <CardContent>
                <ContactMailIcon fontSize="large" />
                <Typography gutterBottom variant="h5" component="div">
                  Contact Support
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Need help? Our support team is here to assist you 24/7.
                </Typography>
                <Box textAlign="center" mt={2}>
                  <Button
                    component={Link}
                    to="/contact-support"
                    variant="contained"
                    color="primary"
                  >
                    Contact Support
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Events Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Featured Events
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={party}
                  alt="Concert"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Rock Concert
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Join us for an unforgettable night of live music and entertainment.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={techconference}
                  alt="Conference"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tech Conference
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore the latest trends in technology with industry leaders.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={AnnualGala}
                  alt="Party"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Annual Gala
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Celebrate with us at our annual gala event.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                alt="User 1"
                src="https://source.unsplash.com/random?face"
                sx={{ width: 64, height: 64, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2" color="text.secondary">
                "EventManager made planning my event a breeze. Highly recommended!"
              </Typography>
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                alt="User 2"
                src="https://source.unsplash.com/random?woman"
                sx={{ width: 64, height: 64, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6">Jane Smith</Typography>
              <Typography variant="body2" color="text.secondary">
                "The best event management tool I've ever used. Great support and features."
              </Typography>
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                alt="User 3"
                src="https://source.unsplash.com/random?man"
                sx={{ width: 64, height: 64, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h6">Michael Lee</Typography>
              <Typography variant="body2" color="text.secondary">
                "Fantastic experience! EventManager helped me organize my wedding effortlessly."
              </Typography>
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
              <StarIcon sx={{ color: '#ffd700' }} />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action Footer */}
      <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#3f51b5', color: '#fff' }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            Ready to start planning your event?
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Sign Up Now
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Home;
