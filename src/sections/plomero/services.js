/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/plo1.png';
import icon2 from 'assets/images/icons/plo2.png';
import icon3 from 'assets/images/icons/plo3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Plomeros Certificados',
    description: `Plomero experto en instalaciones de calentadores o boilers de todas las marcas como Cinsa, Rheem, Bosch, Delta, Foset, Hesa, Leflam y más,`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Servicio Garantizado',
    description: `Servicio especializado en bombas de agua, hidroneumáticos, drenaje, fregaderos, lavabos, regaderas, tuberías, tinacos etc.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Servicio Urgente',
    description: `Trabajos garantizados. Instalacion de todo tipo de accesorios para el baño, cocina, cuartos de lavado, y más. Cotizacion sin compromiso.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="TÉCNICOS EXPERTOS EN PLOMERÍA"
          description="Técnicos especializados en todos los problemas de plomería en tu hogar. Reparacion y mantenimiento de baños, tuberías y drenajes. Mantenimiento e instalación de tinacos. Distribuidores Autorizados."
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
