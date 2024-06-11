import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
  Paper,
} from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Support
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Avatar>
                <ContactMailIcon />
              </Avatar>
            </Box>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactSupport;
