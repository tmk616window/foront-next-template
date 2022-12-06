import { Box, Typography, Container, styled } from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Head from 'next/head';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

function Status500() {
  return (
    <>
      <Head>
        <title>Status - 500</title>
      </Head>
      <MainContent>
        <Container maxWidth="sm">
          <Box textAlign="center">
            <img alt="500" height={260} src="/static/images/status/500.svg" />
            <Typography variant="h2" sx={{ my: 2 }}>
              There was an error, please try again later
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
              sx={{ mb: 4 }}
            >
              The server encountered an internal error and was not able to
              complete your request
            </Typography>
          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default Status500;

Status500.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
