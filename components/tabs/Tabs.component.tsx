import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import { AnimeObject } from '@generated/graphql';

type Props = {
  data: AnimeObject[] | undefined;
};

export default function TabsForm(props: Props) {
  const { data } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 600 } }}>
      {data && data?.length <= 0 ? (
        <Typography color="Background" align="center" fontWeight="bold" variant="h4">
          Buscar un anime
        </Typography>
      ) : (
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {data &&
            data.map((r, index) => {
              return (
                <Tab
                  key={index}
                  label={
                    <>
                      <Typography color="Background" fontWeight={'bold'}>
                        {r.scoreMessage}
                      </Typography>
                    </>
                  }
                  wrapped
                  icon={
                    <Image
                      alt="test avatar"
                      height={300}
                      width={200}
                      src={r.images?.jpg.image_url ?? ''}
                      style={{ borderRadius: 10, marginBottom: 10 }}
                    />
                  }
                />
              );
            })}
        </Tabs>
      )}
    </Box>
  );
}
