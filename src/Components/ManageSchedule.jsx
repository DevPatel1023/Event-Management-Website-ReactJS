import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';

const ManageSchedule = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Manage Schedule
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <ScheduleIcon fontSize="large" />
              <Typography gutterBottom variant="h5" component="div">
                Event 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: 2024-07-20
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Time: 10:00 AM
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: This is a sample description of event 1.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <ScheduleIcon fontSize="large" />
              <Typography gutterBottom variant="h5" component="div">
                Event 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: 2024-07-21
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Time: 02:00 PM
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: This is a sample description of event 2.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <ScheduleIcon fontSize="large" />
              <Typography gutterBottom variant="h5" component="div">
                Event 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: 2024-07-22
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Time: 11:00 AM
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: This is a sample description of event 3.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Button variant="contained" color="primary" size="large">
          Add New Event
        </Button>
      </Box>
    </Container>
  );
};

export default ManageSchedule;
