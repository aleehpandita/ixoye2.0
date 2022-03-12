import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/pantallas/seo';
import Layout from 'components/pantallas/layout';
import Banner from 'sections/pantallas/banner';
import Services from 'sections/pantallas/services';
import Testimonials from 'sections/pantallas/testimonials';
import OurTeam from 'sections/pantallas/our-team';
import OtherServices from 'sections/pantallas/other-services';
import WhyUs from 'sections/pantallas/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/pantallas/blog';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Reparación y Mantenimiento de Pantallas y Televisores"
          description="Tecnicos especialistas en reparación de Pantallas y Televisores"
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
