'use client';

import { _brands, _testimonials, _pricingMarketing } from 'src/_mock';

import MarketingOurClients from '../marketing-our-clients';
import MarketingLandingHero from '../landing/marketing-landing-hero';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import PricingMarketing from '../../pricing/marketing/pricing-marketing';
import MarketingLandingStatics from '../landing/marketing-landing-static';
import MarketingLandingDownload from '../landing/marketing-landing-download';
import MarketingLandingCoreFeature from '../landing/marketing-landing-feature';

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  return (
    <>
      <MarketingLandingHero />

      <MarketingOurClients brands={_brands} />

      <MarketingLandingCoreFeature />
      <MarketingLandingStatics />

      {/* <MarketingLandingAbout /> */}

      {/* <MarketingLandingServices /> */}

      {/* <MarketingLandingProcess /> */}

      {/* <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} /> */}

      {/* <MarketingTeam members={_members} /> */}
      <PricingMarketing plans={_pricingMarketing} />
      {/* <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} /> */}

      {/* <MarketingLandingFaqs /> */}

      <MarketingTestimonial testimonials={_testimonials} />

      {/* <MarketingLandingFreeSEO /> */}
      <MarketingLandingDownload />

      {/* <MarketingNewsletter /> */}
    </>
  );
}
