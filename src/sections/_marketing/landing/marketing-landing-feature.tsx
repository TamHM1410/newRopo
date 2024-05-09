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
            textAlign: { xs: 'center' },
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
          display: { md: 'flex', xs: 'flex' },
          alignItems: { md: 'center', xs: 'center' },
          justifyContent: 'center',
          minHeight: { md: `100vh` },
          height: { md: `auto` },
        }}
      >
        <Grid
          data-aos="fade-right"
          container
          columnSpacing={{ xs: 0, md: 10 }}
          sx={{ marginRight: 5 }}
        >
          <Grid
            xs={6}
            md={4}
            lg={4}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              position: { sm: 'relative', xs: 'relative' },
              right: { sm: 10, xs: 5 },
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
                  justifyContent: { sm: 'flex-end', md: 'flex-end', xs: 'center' },
                  fontSize: { md: 25, xs: 20 },
                  textAlign: { sm: 'end', md: 'end', xs: 'start' },

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
                  textAlign: { sm: 'end', md: 'end', xs: 'start' },
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
                  justifyContent: { sm: 'flex-end', md: 'flex-end', xs: 'center' },
                  fontSize: { md: 30, xs: 20 },
                  fontWeight: 500,
                  mt: { md: 2, xs: 0.5, sm: 2 },
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
                  textAlign: { sm: 'end', md: 'end', xs: 'start' },
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
                  justifyContent: { xs: 'center', md: 'flex-end', sm: 'flex-end' },
                  fontSize: { md: 25, xs: 20 },
                  fontWeight: 500,
                  mt: { sm: 2, md: 2, xs: 6 },
                }}
              >
                Rich media
              </Typography>
              <Typography
                variant="overline"
                sx={{
                  pt: { md: 3, xs: 3 },

                  color: '#4b5d73',
                  ml: { xs: 5 },
                  display: 'flex',
                  justifyContent: 'flex-start',
                  textAlign: { sm: 'end', md: 'end', xs: 'start' },
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
                position: { sm: 'relative', xs: 'relative' },
                left: { sm: 10, xs: 5 },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontSize: { md: 30, xs: 20 },
                  fontWeight: 500,
                  justifyContent: { sm: 'flex-end', md: 'flex-end', xs: 'center' },
                }}
              >
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
              <Typography variant="overline" sx={{ fontSize: { md: 30, xs: 20 }, fontWeight: 500 }}>
                Fast History Excution
              </Typography>
              <Typography variant="overline" sx={{ pt: { md: 3, xs: 3 }, color: '#4b5d73' }}>
                With our fast history execution features, you can navigate and use your data without
                any delays. Discover how efficient and seamless your experience can be!ected.
              </Typography>
            </Typography>
            <Typography
              variant="overline"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: { md: 5, xs: 5 },
                ml: { xs: 2, md: 0 },
                mt: { xs: 0 },
              }}
            >
              <Typography variant="overline" sx={{ fontSize: { md: 30, xs: 20 }, fontWeight: 500 }}>
                Keep your history safe
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
