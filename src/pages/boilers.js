import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/boiler/seo';
import Layout from 'components/boiler/layout';
import Banner from 'sections/boiler/banner';
import Services from 'sections/boiler/services';
import Testimonials from 'sections/boiler/testimonials';
import OurTeam from 'sections/boiler/our-team';
import OtherServices from 'sections/boiler/other-services';
import WhyUs from 'sections/boiler/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/boiler/blog';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Reparación y Mantenimiento de Boiler y Calentadores"
          description="Tecnicos especialistas en reparación de Boilers y Calentadores"
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
