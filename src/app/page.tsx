import MainLayout from 'src/layouts/main';

import MarketingLandingPage from './marketing/page';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'The starting point for your next project',
};

export default function HomePage() {
  return (
    <MainLayout>
      <MarketingLandingPage />
    </MainLayout>
  );
}
