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
    likeAmount: 7500,
    downloadAmount: 10250,
    starAmount: 1300,
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
        overflow: 'hidden',
        backgroundColor: '#5AB2FF',
      }}
    >
      <Container
        sx={{
          py: 5,
          gap: 5,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            mt: 15,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            mb: 5,
          }}
        >
          <Typography sx={{ fontSize: 50, fontWeight: 700 }}>Statistics</Typography>
          <Typography sx={{ fontSize: 30 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Typography>

        <Grid container columnSpacing={{ xs: 0, md: 12 }} data-aos="zoom-in">
          <Grid xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                px: { md: 15 },
                mt: { xs: 2 },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CardContent sx={{ width: 'auto' }}>
                <ExternalLink size={100} color="#008DDA" />
                <Typography>
                  <Typography
                    sx={{
                      pt: 5,
                      fontSize: { md: 50, xs: 50 },
                      fontWeight: { md: 700 },
                      color: '#008DDA',
                    }}
                  >
                    <CountUp start={0} end={amount?.shareAmount} duration={15} />
                  </Typography>
                  <Typography sx={{ pt: 2, fontSize: { md: 12, xs: 12 }, fontWeight: { md: 600 } }}>
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
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CardContent sx={{ width: 'auto' }}>
                <ThumbsUp size={100} color="#008DDA" />
                <Typography>
                  <Typography
                    sx={{
                      pt: 5,
                      fontSize: { md: 50, xs: 50 },
                      fontWeight: { md: 700 },
                      color: '#008DDA',
                    }}
                  >
                    <CountUp start={0} end={amount?.likeAmount} duration={15} />
                  </Typography>
                  <Typography sx={{ pt: 2, fontSize: { md: 12, xs: 12 }, fontWeight: { md: 600 } }}>
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
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CardContent sx={{ width: 'auto' }}>
                <Download size={100} color="#008DDA" />
                <Typography>
                  <Typography
                    sx={{
                      pt: 5,
                      fontSize: { md: 50, xs: 50 },
                      fontWeight: { md: 700 },
                      color: '#008DDA',
                    }}
                  >
                    <CountUp start={0} end={amount?.downloadAmount} duration={15} />
                  </Typography>
                  <Typography sx={{ pt: 2, fontSize: { md: 12, xs: 15 }, fontWeight: { md: 600 } }}>
                    Positive Ratings
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                px: { md: 15, xs: 5 },
                mt: { xs: 2 },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CardContent sx={{ width: 'auto' }}>
                <Star size={100} color="#008DDA" />
                <Typography>
                  <Typography
                    sx={{
                      pt: 5,
                      fontSize: { md: 50, xs: 50 },
                      fontWeight: { md: 700 },
                      color: '#008DDA',
                    }}
                  >
                    <CountUp start={0} end={amount?.starAmount} duration={15} />
                  </Typography>
                  <Typography sx={{ pt: 2, fontSize: { md: 12, xs: 15 }, fontWeight: { md: 400 } }}>
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
