'use client';

import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { Star, ThumbsUp, Download, ExternalLink } from 'lucide-react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { Card, Typography, CardContent } from '@mui/material';

// hook

import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------
import aos from '../../../utils/aos';

export default function MarketingLandingStatics() {
  const [amount, setAmount] = useState({
    shareAmount: 550,
    likeAmount: 500,
    downloadAmount: 250,
    starAmount: 300,
  });
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
        //   color: alpha(theme.palette.background.default, 0.4),
        //   imgUrl: 'https://www.devsnews.com/template/appzone/appzone/img/slider/slider1.jpg',
        // }),
        overflow: 'auto',
        backgroundColor: '#5884E7',
      }}
    >
      <Container
        sx={{
          py: 5,
          gap: 5,
          display: { md: 'flex', xs: 'flex' },
          alignItems: { md: 'center', xs: 'center' },
          minHeight: { md: `100vh` },
          maxHeight: { md: '800vh' },

          height: { md: `auto` },
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            mt: 5,
            mb: 5,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Typography variant="overline" sx={{ fontSize: 50, fontWeight: 900, color: '#D2E0ED' }}>
            Statistics
          </Typography>
          <Typography variant="overline" sx={{ fontSize: 20, color: '#fafae4' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Typography>

        <Grid container columnSpacing={{ xs: 0, md: 12, sm: 12 }} data-aos="zoom-in">
          <Grid xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                px: { md: 15 },
                position: { xs: 'relative', sm: 'relative' },
                right: { xs: 1 },
                left: { sm: 2 },
                mb: { sm: 5 },
                mt: { xs: 2 },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CardContent sx={{ width: 'auto' }}>
                <ExternalLink size={100} color="#0B1957" />
                <Typography>
                  <Typography
                    sx={{
                      pt: 5,
                      fontSize: { md: 50, xs: 50 },
                      fontWeight: { md: 700 },
                      color: '#0B1957',
                    }}
                  >
                    <CountUp start={0} end={amount?.shareAmount} duration={15} />
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{ pt: 2, fontSize: { md: 10, xs: 10 }, fontWeight: { md: 600 } }}
                  >
                    Positive Ratings
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                px: { md: 15 },
                mt: { xs: 2 },
                mb: { sm: 5 },

                display: 'flex',
                justifyContent: 'center',
                position: { sm: 'relative', xs: 'relative' },
                right: { xs: 1 },
                left: { sm: 0 },
              }}
            >
              <CardContent sx={{ width: 'auto' }}>
                <ThumbsUp size={100} color="#0B1957" />
                <Typography>
                  <Typography
                    sx={{
                      pt: 5,
                      fontSize: { md: 50, xs: 50 },
                      fontWeight: { md: 700 },
                      color: '#0B1957',
                    }}
                  >
                    <CountUp start={0} end={amount?.likeAmount} duration={15} />
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{ pt: 2, fontSize: { md: 10, xs: 10 }, fontWeight: { md: 600 } }}
                  >
                    Positive Ratings
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                px: { md: 15 },
                mt: { xs: 2, sm: 2.5 },

                display: 'flex',
                justifyContent: 'center',
                position: { sm: 'relative', xs: 'relative' },
                right: { xs: 1 },
                left: { sm: 3 },
              }}
            >
              <CardContent sx={{ width: 'auto' }}>
                <Download size={100} color="#0B1957" />
                <Typography>
                  <Typography
                    sx={{
                      pt: 5,
                      fontSize: { md: 50, xs: 50 },
                      fontWeight: { md: 700 },
                      color: '#0B1957',
                    }}
                  >
                    <CountUp start={0} end={amount?.downloadAmount} duration={15} />
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{ pt: 2, fontSize: { md: 10, xs: 10 }, fontWeight: { md: 600 } }}
                  >
                    Positive Ratings
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                px: { md: 15 },

                mt: { xs: 2, sm: 2.5 },
                position: { sm: 'relative', xs: 'relative' },
                right: { xs: 1 },
                display: 'flex',
                justifyContent: 'center',
                left: { sm: 2 },
              }}
            >
              <CardContent sx={{ width: 'auto' }}>
                <Star size={100} color="#0B1957" />
                <Typography>
                  <Typography
                    sx={{
                      pt: 5,
                      fontSize: { md: 50, xs: 50 },
                      fontWeight: { md: 700 },
                      color: '#0B1957',
                    }}
                  >
                    <CountUp start={0} end={amount?.starAmount} duration={15} />
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{ pt: 2, fontSize: { md: 10, xs: 10 }, fontWeight: { md: 600 } }}
                  >
                    Positive Ratings
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
