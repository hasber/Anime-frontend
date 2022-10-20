import SearchForm from '@components/tabs/Search.component';
import { Box, CssBaseline, Grid } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box sx={{ background: '#54287d', height: '100vh' }}>
      <CssBaseline />
      <Grid container alignContent="center" direction="column">
        <Grid item xs={12}>
          <SearchForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
