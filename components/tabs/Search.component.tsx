import { AnimeObject, useGetAnimesLazyQuery } from '@generated/graphql';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, IconButton, InputBase, Paper } from '@mui/material';
import { useState } from 'react';
import TabsForm from './Tabs.component';

export default function SearchForm() {
  const [search, setsearch] = useState('');
  const [data, setdata] = useState<AnimeObject[]>();

  const [getAnimes] = useGetAnimesLazyQuery({
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-and-network',
  });

  const onSubmit = async (name: string) => {
    setsearch(name);
    const response = await getAnimes({
      variables: {
        name,
      },
    });
    setdata(response.data?.getAnimes);
  };

  return (
    <Grid container direction="column" justifyContent="center">
      <Grid item xs={6} m={6}>
        <Paper
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <InputBase
            sx={{ flex: 1 }}
            placeholder="Buscar…"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={(value) => setsearch(value.target.value)}
          />
          <IconButton type="button" aria-label="search" onClick={() => onSubmit(search)}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item xs={12} justifyContent="center">
        <TabsForm data={data} />
      </Grid>
    </Grid>
  );
}
