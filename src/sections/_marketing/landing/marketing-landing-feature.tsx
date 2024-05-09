'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';

import aos from '../../../utils/aos';

// ----------------------------------------------------------------------

export default function MarketingLandingCoreFeature() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <Box
      data-aos="fade-down fade-up"
      sx={{
        // ...bgGradient({
        //   color: alpha(theme.palette.background.default, 0.7),
        //   imgUrl: 'https://www.devsnews.com/template/appzone/appzone/img/slider/slider1.jpg',
        // }),
        bgcolor: '#D2E0ED',
        overflow: 'auto',
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: { md: 'flex', xs: 'flex' },
          justifyContent: { md: 'center', xs: 'center' },
          pt: 10,
          fontSize: 40,
          fontWeight: 600,
          color: '#5884E7',
        }}
      >
        CORE FEATURE
      </Typography>
      {mdUp && (
        <Typography
          variant="overline"
          sx={{
            display: { md: 'flex' },
            justifyContent: { md: 'center' },
            fontSize: 25,
            fontWeight: 700,
          }}
        >
          It’s easier to ask forgiveness than it is to get permission.
        </Typography>
      )}
      {!mdUp && (
        <Typography
          variant="overline"
          sx={{
            display: { md: 'flex', xs: 'flex' },
            justifyContent: { md: 'center', xs: 'center' },
            fontSize: 25,
            fontWeight: 700,
          }}
        >
          It’s easier to ask forgiveness .
        </Typography>
      )}

      <Container
        sx={{
          py: { md: 15, xs: 5 },
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          minHeight: { md: `100vh` },
          height: { md: `auto` },
        }}
      >
        <Grid data-aos="fade-right" container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={6}
            md={4}
            lg={4}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              sx={{
                pt: { md: 1, xs: 1 },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  fontSize: { md: 25, sx: 25 },
                  fontWeight: 500,
                }}
              >
                User Friendly
              </Typography>
              <Typography
                variant="overline"
                sx={{
                  pt: { md: 3, xs: 3 },
                  color: '#4b5d73',
                  ml: { xs: 5 },
                  display: 'flex',
                  justifyContent: 'flex-start',
                  textAlign: 'end',
                }}
              >
                Our focus is on making your experience as smooth and enjoyable as possible. Discover
                the ease of use .
              </Typography>
            </Typography>
            <Typography
              sx={{ fontSize: { md: 25, sx: 25 }, fontWeight: 500, pt: { md: 5, xs: 5 } }}
            >
              <Typography
                variant="overline"
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  fontSize: { md: 30, sx: 30 },
                  fontWeight: 500,
                  mt: 2,
                }}
              >
                Retina Ready
              </Typography>

              <Typography
                variant="overline"
                sx={{
                  pt: { md: 3, xs: 3 },
                  color: '#4b5d73',
                  ml: { xs: 5 },
                  display: 'flex',
                  justifyContent: 'flex-start',
                  textAlign: 'end',
                }}
              >
                With retina-ready support, you can enjoy a premium visual experience that enhances
                your use of our application.
              </Typography>
            </Typography>
            <Typography
              sx={{ fontSize: { md: 30, sx: 30 }, fontWeight: 500, pt: { md: 5, xs: 5 } }}
            >
              <Typography
                variant="overline"
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  fontSize: { md: 30, sx: 30 },
                  fontWeight: 500,
                  mt: 2,
                }}
              >
                Share rich media
              </Typography>
              <Typography
                variant="overline"
                sx={{
                  pt: { md: 3, xs: 3 },
                  color: '#4b5d73',
                  ml: { xs: 5 },
                  display: 'flex',
                  justifyContent: 'flex-start',
                  textAlign: 'end',
                }}
              >
                Experience rapid and efficient access to your history with our cutting-edge
                application.Discover the difference that high-resolution can make!
              </Typography>
            </Typography>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={4} lg={4}>
              <Image
                data-aos="fade-up-right"
                sx={{ px: 3 }}
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="https://www.devsnews.com/template/appzone/appzone/img/features/1.png"
              />
            </Grid>
          )}

          <Grid xs={6} md={4} lg={4} data-aos="fade-right">
            <Typography
              variant="overline"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: { md: 1, xs: 1 },
                ml: { xs: 2, md: 0 },
              }}
            >
              <Typography variant="overline" sx={{ fontSize: { md: 25, sx: 25 }, fontWeight: 500 }}>
                Use on any Device
              </Typography>
              <Typography variant="overline" sx={{ pt: { md: 3, xs: 3 }, color: '#4b5d73' }}>
                Experience a smooth and convenient app usage on any device you choose. Work and play
                anytime, anywhere!
              </Typography>
            </Typography>
            <Typography
              variant="overline"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: { md: 5, xs: 5 },
                ml: { xs: 2, md: 0 },
                mt: 2,
              }}
            >
              <Typography variant="overline" sx={{ fontSize: { md: 25, sx: 25 }, fontWeight: 500 }}>
                Keep your history safe
              </Typography>
              <Typography variant="overline" sx={{ pt: { md: 3, xs: 3 }, color: '#4b5d73' }}>
                Protecting your data is our priority. With our application, you can rest assured
                that your history is secure and private
              </Typography>
            </Typography>
            <Typography
              variant="overline"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: { md: 5, xs: 5 },
                ml: { xs: 2, md: 0 },
                mt: 2,
              }}
            >
              <Typography variant="overline" sx={{ fontSize: { md: 25, sx: 25 }, fontWeight: 500 }}>
                Fast History Excution
              </Typography>
              <Typography variant="overline" sx={{ pt: { md: 3, xs: 3 }, color: '#4b5d73' }}>
                With our fast history execution features, you can navigate and use your data without
                any delays. Discover how efficient and seamless your experience can be!ected.
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
