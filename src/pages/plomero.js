import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/plomero/seo';
import Layout from 'components/plomero/layout';
import Banner from 'sections/plomero/banner';
import Services from 'sections/plomero/services';
import Testimonials from 'sections/plomero/testimonials';
import OurTeam from 'sections/plomero/our-team';
import OtherServices from 'sections/plomero/other-services';
import WhyUs from 'sections/plomero/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/plomero/blog';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Servicio de plomeria en Cancún | Técnico plomero"
          description="Tecnicos especialistas en plomeria. No dejes que te roben más y busca verdaderos expertos para tu casa."
        />
        <Banner />
        <Services />
        {/* <Testimonials /> */}
        <OurTeam />
        <OtherServices />
        <WhyUs />
        <Blog />
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
