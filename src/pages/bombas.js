import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/bombas/seo';
import Layout from 'components/bombas/layout';
import Banner from 'sections/bombas/banner';
import Services from 'sections/bombas/services';
import Testimonials from 'sections/bombas/testimonials';
import OurTeam from 'sections/bombas/our-team';
import OtherServices from 'sections/bombas/other-services';
import WhyUs from 'sections/bombas/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/bombas/blog';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Reparación y Mantenimiento de Bombas"
          description="Tecnicos especialistas en reparación de bombas e hidroneumaticos"
        />
        <Banner />
        <Services />
        <Testimonials />
        <OurTeam />
        <OtherServices />
        <WhyUs />
        {/* <Blog /> */}
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
