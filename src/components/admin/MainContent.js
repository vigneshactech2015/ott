import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Donut,Tables,Scatters } from './CommonMainContent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MainContent() {
  return (
    <div    >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {/*Card 1 -- Donut Chart*/}
        <Grid item xs={12} sm={6} md={6}>
          <Item>
          <Donut/>
          </Item>
        </Grid>
         {/*Card 2 --Scatter Chart*/}
        <Grid item xs={12} sm={6} md={6}>
          <Item>
          <Scatters/>
          </Item>
        </Grid>
         {/*Card 3 -Table*/}
        <Grid item xs={12} sm={12} md={12}>
          <Item>
        <Tables/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}