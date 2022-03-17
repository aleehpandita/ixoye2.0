/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/ele1.png';
import icon2 from 'assets/images/icons/ele3.png';
import icon3 from 'assets/images/icons/ele4.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Electricistas Certificados',
    description: `Electricista experto en instalaciones electricas ya sea Residencial o Industrial. No confies tu seguridad a cualquiera, deja que nuestros expertos hagan la instalación en tu hogar.`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Servicio Garantizado',
    description: `Servicio especializado en mantenimiento, Instalaciones, Reemplazos y Reparaciones electricas.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Servicio Urgente',
    description: `Trabajos garantizados. Servicio de electricista experto en Cancun, hacemos instalaciónes eléctricas 110, bifásica, trifásicamente y más.`,
  }, 
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="TÉCNICOS EXPERTOS EN ELECTRICIDAD"
          description="Técnicos electricistas especializados en todos los problemas de electricidad en tu hogar. Servicio de electricista experto en Cancun, hacemos instalaciónes eléctricas 110, bifásica, trifásicamente, etc."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
