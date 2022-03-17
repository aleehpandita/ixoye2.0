import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/electricista/seo';
import Layout from 'components/electricista/layout';
import Banner from 'sections/electricista/banner';
import Services from 'sections/electricista/services';
import Testimonials from 'sections/electricista/testimonials';
import OurTeam from 'sections/electricista/our-team';
import OtherServices from 'sections/electricista/other-services';
import WhyUs from 'sections/electricista/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/electricista/blog';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Servicio de electricista en Cancún | Técnico electricista"
          description="Tecnicos electricistas especialistas. No dejes que te roben más y busca verdaderos expertos para tu casa."
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
