import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { IPricingMarketingProps } from 'src/types/pricing';

// ----------------------------------------------------------------------

type Props = {
  plan: IPricingMarketingProps;
};

export default function PricingMarketingCard({ plan }: Props) {
  const basicLicense = plan.license === 'Contained';

  const starterLicense = plan.license === 'Starter';

  const premiumLicense = plan.license === 'Premium';

  return (
    <Card
      sx={{
        p: 5,
        pt: 8,
        boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        ...(starterLicense && {
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      {starterLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 24, left: 32 }}>
          POPULAR
        </Label>
      )}

      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography variant="h4" component="div" sx={{ color: '#5884E7', mb: 2 }}>
            {plan.license}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h3" component="span">{`$${plan.price}`}</Typography>
            <Typography variant="h5" component="span" sx={{ color: 'text.disabled' }}>
              /mo
            </Typography>
          </Stack>
        </div>

        <Image alt="icon" src={plan.icon} sx={{ width: 64, height: 64 }} />
      </Stack>

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
        {plan.caption}
      </Typography>

      <Stack spacing={2} sx={{ my: 5 }}>
        {plan.options.map((option) => (
          <Stack key={option} direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:checkmark" sx={{ mr: 2, color: 'primary.main' }} /> {option}
          </Stack>
        ))}
      </Stack>
      <Button
        fullWidth
        size="large"
        style={{ backgroundColor: '#5884E7' }}
        // color={(premiumLicense && 'primary') || 'inherit'}
        variant={(basicLicense && 'outlined') || 'contained'}
      >
        Choose Package
      </Button>
    </Card>
  );
}
