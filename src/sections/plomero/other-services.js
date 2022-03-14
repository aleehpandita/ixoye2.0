/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/plo1.png';
import icon5 from 'assets/images/icons/plo2.png';
import icon6 from 'assets/images/icons/plo3.png';
import icon7 from 'assets/images/icons/plo4.png';
import icon8 from 'assets/images/icons/plo5.png';
import icon9 from 'assets/images/icons/plo6.png';

const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: '#learn-more',
    title: 'Reparaciones Certificadas',
    description: `Instalacion de todo tipo de accesorios para el baño, cocina, cuartos de lavado, y más. Atención a emergencias.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: '#learn-more',
    title: 'Destapado de tuberias',
    description: `Destapado de tuberias y drenaje. Servicios industriales, hotelero, obra, comercial y residencial. Nuestro servicio es de forma inmediata.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: '#learn-more',
    title: 'Instalaciones hidráulicas y sanitarias',
    description: `Urgencias Sanitarias. Detección y reparación de fugas. Serivicios de urgencia pregunta sin compromiso al 998 130 7542.`,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: '#learn-more',
    title: 'Atención inmediata',
    description: `Mantenimiento en tu hogar. No te quedes esperando una respuesta, tenemos servicio de urgencia las 24/7.`,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: '#learn-more',
    title: 'Servicio Garantizado',
    description: `Reparación e instalación de bombas de agua. Reparación de fugas. Solamente te separa una llamada de enmendar el problema en tu hogar.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: '#learn-more',
    title: 'Servicio en Línea',
    description: `Destapado de tuberias y drenaje. Cualquier servicio de plomería, cotiza sin compromiso a nuestro WhatsApp o Llama sin compromiso al 9981307542`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Servicio de Plomería Garantizado"
          description="Servicios de plomería y de mantenimiento residencial, entregamos con puntualidad y el trabajo está garantizado."
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
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
