'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------
import aos from '../../../utils/aos';

export default function MarketingLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <Box
      data-aos="fade-up"
      sx={{
        // ...bgGradient({
        //   color: alpha(theme.palette.background.default, 0.4),
        //   imgUrl: 'https://www.devsnews.com/template/appzone/appzone/img/slider/slider1.jpg',
        // }),
        backgroundColor: '#5884E7',
        overflow: 'auto',
        px: 5,
      }}
    >
      <Container
        sx={{
          py: 15,
          display: { md: 'flex', xs: 'flex' },
          alignItems: { md: 'center', xs: 'center' },
          minHeight: { md: `100vh` },
          maxHeight: { md: '800vh' },
          height: { md: `auto` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h1" sx={{ my: 5, color: '#c4e3ff' }}>
              It always seems impossible until done.
            </Typography>

            <Typography sx={{ color: 'white' }}>
              Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
              venenatis ante odio sit amet eros.
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', md: 'unset' }}
              justifyContent={{ xs: 'center', md: 'unset' }}
              sx={{ mt: 5 }}
            >
              <Button
                variant="contained"
                color="inherit"
                size="large"
                style={{ width: 200, color: '#2b77eb', backgroundColor: 'white' }}
              >
                GETTING STARTED
              </Button>

              <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
                {/* <Fab size="medium" sx={{ mr: 1 }}>
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                See Our Work */}
                <Button variant="contained" color="inherit" size="large" style={{ width: 200 }}>
                  PURCHASE
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7} data-aos="zoom-in ">
              <Image
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="https://www.devsnews.com/template/appzone/appzone/img/slider/1.png"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
