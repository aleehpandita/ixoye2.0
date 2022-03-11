import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/aire/layout';
import Banner from 'sections/aire/banner';
import Services from 'sections/aire/services';
import Testimonials from 'sections/aire/testimonials';
import OurTeam from 'sections/aire/our-team';
import OtherServices from 'sections/aire/other-services';
import WhyUs from 'sections/aire/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/aire/blog';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Reparación y Mantenimiento de Aire Acondicionado"
          description="Tecnicos especialistas en reparación de Aire Acondicionado"
        />
        <Banner />
        <Services />
        <Testimonials />
        <OurTeam />
        <OtherServices />
        <WhyUs />
        <Blog />
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
