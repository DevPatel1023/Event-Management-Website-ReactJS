import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  date: yup.date().required('Date is required'),
  image: yup.mixed().required('Image is required'),
});

const CreateEvent = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      date: null,
      image: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue('image', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Create Event
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="title"
                name="title"
                label="Event Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Event Description"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                fullWidth
                label="Event Date"
                value={formik.values.date}
                onChange={(value) => formik.setFieldValue('date', value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label" fullWidth>
                Upload Event Image
                <input
                  type="file"
                  hidden
                  onChange={handleImageChange}
                />
              </Button>
              {formik.touched.image && formik.errors.image && (
                <Typography color="error" variant="body2">
                  {formik.errors.image}
                </Typography>
              )}
            </Grid>
            {imagePreview && (
              <Grid item xs={12}>
                <Box
                  component="img"
                  src={imagePreview}
                  alt="Event Image"
                  sx={{ width: '100%', height: 'auto', mt: 2 }}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <Button color="primary" variant="contained" fullWidth type="submit">
                Create Event
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateEvent;
