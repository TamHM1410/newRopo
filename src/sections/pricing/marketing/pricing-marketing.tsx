'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { IPricingMarketingProps } from 'src/types/pricing';

// ----------------------------------------------------------------------
import aos from '../../../utils/aos';

import PlanCard from './pricing-marketing-card';

type Props = {
  plans: IPricingMarketingProps[];
};

export default function PricingMarketing({ plans }: Props) {
  const theme = useTheme();
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <Box
      data-aos=" fade-up"
      sx={{
        // ...bgGradient({
        //   color: alpha(theme.palette.background.default, 0.7),
        //   imgUrl: 'https://www.devsnews.com/template/appzone/appzone/img/slider/slider1.jpg',
        // }),
        overflow: 'hidden',
        bgcolor: '#D2E0ED',
      }}
    >
      <Container
        sx={{
          pt: 10,
          pb: { xs: 5, md: 10 },
        }}
      >
        <Stack
          spacing={5}
          alignItems={{ xs: 'center', md: 'flex-end' }}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{ mb: { xs: 5, md: 10 } }}
        >
          <Stack
            spacing={3}
            sx={{
              maxWidth: 480,
              mx: { xs: 'auto', md: 'unset' },
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <Typography variant="overline">Pricing</Typography>

            <Typography variant="h2" sx={{ color: '#5884E7' }}>
              Check Our Pricing
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Choose the perfect plan for your needs.
              <br /> Always flexible to grow
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography variant="overline">MONTHLY</Typography>

            <Switch
              defaultChecked={false}
              color="info"
              sx={{
                '& .MuiSwitch-track': {
                  backgroundColor: '#5884E7', // Apply custom color to the track
                },
                '& .Mui-checked': {
                  backgroundColor: '#fff', // Optional: customize the thumb color
                },
              }}
            />

            <Typography variant="overline">YEARLY (save 10%)</Typography>
          </Stack>
        </Stack>

        <Box
          data-aos="zoom-in-up"
          sx={{
            gap: 4,
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {plans.map((plan) => (
            <PlanCard key={plan.license} plan={plan} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
