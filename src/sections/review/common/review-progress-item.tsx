import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';

import Iconify from 'src/components/iconify';
import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type Props = {
  rating: {
    value: string;
    number: number;
  };
  index: number;
  totals: number;
};

export default function ReviewProgressItem({ rating, totals, index }: Props) {
  return (
    <FormControlLabel
      value={rating.value}
      control={<Radio sx={{ display: 'none' }} />}
      label={
        <Stack alignItems="center" direction="row">
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                width: 12,
                typography: 'subtitle1',
                textAlign: 'center',
                mr: 0.5,
              }}
            >
              {5 - index}
            </Box>
            <Iconify width={16} icon="carbon:star" />
          </Stack>

          <LinearProgress
            color="inherit"
            variant="determinate"
            value={(rating.number / totals) * 100}
            sx={{
              mx: 2,
              width: 1,
              height: 6,
              '&:before': {
                opacity: 1,
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
              },
            }}
          />

          <Typography
            variant="body2"
            sx={{
              minWidth: 40,
              color: 'text.disabled',
            }}
          >
            {fShortenNumber(rating.number)}
          </Typography>
        </Stack>
      }
      sx={{
        mx: 0,
        '&:hover': { opacity: 0.48 },
        [`& .${formControlLabelClasses.label}`]: {
          width: 1,
        },
      }}
    />
  );
}
