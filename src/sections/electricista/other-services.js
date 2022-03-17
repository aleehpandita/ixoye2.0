/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/ele1.png';
import icon5 from 'assets/images/icons/ele2.png';
import icon6 from 'assets/images/icons/ele3.png';
import icon7 from 'assets/images/icons/ele4.png';
import icon8 from 'assets/images/icons/ele5.png';
import icon9 from 'assets/images/icons/ele6.png';

const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: '#learn-more',
    title: 'Reparaciones Certificadas',
    description: `Instalacion de todo tipo de instalaciones electricas para el baño, cocina, cuartos, y más. Atención a emergencias.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: '#learn-more',
    title: 'Cableado Eléctrico',
    description: `Necesidades de iluminación y cableado eléctrico, así como de equipo de control, herrajes, tableros eléctricos y más.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: '#learn-more',
    title: 'Instalaciones Alta tensión',
    description: `Urgencias Eléctricas. Detección y reparación de cableados. Servicios de urgencia pregunta sin compromiso al 998 381 6839.`,
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
    description: `Garantizamos la calidad de los productos que comercializamos, ya que somos distribuidores autorizados de las marcas de mayor prestigio en el mercado: Schneider Electric, Indiana, Viakon, Federal Pacific, Himel, Square D, 3M entre otras.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: '#learn-more',
    title: 'Servicio en Línea',
    description: `Montaje de instalaciones eléctricas. Cualquier servicio eléctrico, cotiza sin compromiso a nuestro WhatsApp o Llama sin compromiso al 9983816839`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Servicio de Eléctrico Garantizado"
          description="Tenemos experiencia en ingeniería eléctrica, construcción y montaje de instalaciones eléctricas"
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
