import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { IBrandProps } from 'src/types/brand';
import SvgColor from 'src/components/svg-color';
import Carousel, { useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = {
  brands: IBrandProps[];
};

export default function MarketingOurClients({ brands }: Props) {
  const theme = useTheme();

  const carousel = useCarousel({
    speed: 5000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  });

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 0 },
      }}
    >
      <Carousel {...carousel.carouselSettings}>
        {brands.map((brand) => (
          <SvgColor
            key={brand.id}
            src={brand.image}
            sx={{
              width: 106,
              minHeight: '20vh',
              height: 'auto',
              color: '#5884E7',
            }}
          />
        ))}
      </Carousel>
    </Container>
  );
}
