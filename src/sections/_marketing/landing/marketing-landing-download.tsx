'use client';

import { useEffect } from 'react';
import { Apple, Twitter } from 'lucide-react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { useResponsive } from 'src/hooks/use-responsive';

import aos from '../../../utils/aos';

// ----------------------------------------------------------------------
export default function MarketingLandingDownload() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha('#5884E7', 0.3),
          imgUrl: 'https://www.devsnews.com/template/appzone/appzone/img/bg/2.jpg',
        }),
        // backgroundImage: 'url(https://www.devsnews.com/template/appzone/appzone/img/bg/2.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        sx={{
          py: { md: 15, xs: 5 },
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `50vh` },
        }}
      >
        <Grid data-aos="fade-right" container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid xs={12} md={6}>
            <Typography sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography sx={{ color: 'white', fontSize: { md: 40 }, fontWeight: 900 }}>
                Download app now
              </Typography>
              <Typography variant="overline">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing
                incididunt{' '}
              </Typography>
              <Typography sx={{ mt: 4, gap: 5, display: 'flex' }}>
                <Button
                  sx={{
                    backgroundColor: alpha('#5884E7', 0.3),
                    color: '#ffffff',
                    borderColor: '#ffffff',
                    border: '2px solid',
                    width: 200,
                    gap: 2,
                    fontWeight: 750,
                  }}
                  size="large"
                >
                  {' '}
                  <Twitter size={36} color="#ffffff" />
                  GOOGLE PLAY
                </Button>
                <Button
                  sx={{
                    backgroundColor: alpha('#5884E7', 0.3),
                    color: '#ffffff',
                    borderColor: '#ffffff',
                    border: '2px solid',
                    width: 200,
                    gap: 2,
                    fontWeight: 750,
                  }}
                  size="large"
                >
                  {' '}
                  <Apple size={36} color="#ffffff" />
                  APP STORE
                </Button>
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
