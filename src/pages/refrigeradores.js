import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/refri/seo';
import Layout from 'components/refri/layout';
import Banner from 'sections/refri/banner';
import Services from 'sections/refri/services';
import Testimonials from 'sections/refri/testimonials';
import OurTeam from 'sections/refri/our-team';
import OtherServices from 'sections/refri/other-services';
import WhyUs from 'sections/refri/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/refri/blog';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Reparación y Mantenimiento de Refrigeradores"
          description="Refrigeradores industriales, residenciales, congeladores, centros de refrigeracion insdustrial. Mantenimiento y Reparacion."
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
