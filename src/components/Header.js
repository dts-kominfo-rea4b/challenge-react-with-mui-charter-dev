// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Grid, Typography } from '@mui/material';
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h1" component="h1" gutterBottom>
        Call a Friend
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Your friendly contact app
      </Typography>
    </Grid>  
  );
};

export default Header;
