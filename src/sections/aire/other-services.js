/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/aire1.png';
import icon5 from 'assets/images/icons/aire2.png';
import icon6 from 'assets/images/icons/aire3.png';
import icon7 from 'assets/images/icons/aire4.png';
import icon8 from 'assets/images/icons/aire5.png';
import icon9 from 'assets/images/icons/aire6.png';

const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: '#learn-more',
    title: 'Reparaciones Certificadas',
    description: `Nos especializamos en reparación y compostura de minisplits, centros de ventilacion, aire acondicionado.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: '#learn-more',
    title: 'Todas las marcas',
    description: `Manejamos las marcas de mayor demanda y prestigio en el mercado. Carrier / York / General Electric / Maytag / LG / Mabe / Daewo / Whirlpool`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: '#learn-more',
    title: 'Otras marcas',
    description: `Si tu marca no aparece en nuestra gama de distribuidores autorizados, pregunta sin compromiso al 998 130 7542.`,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: '#learn-more',
    title: 'Atención inmediata',
    description: `No te quedes esperando una respuesta, tenemos servicio de urgencia las 24/7.`,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: '#learn-more',
    title: 'Servicio Garantizado',
    description: `Solamente te separa una llamada de enmendar el problema con tu minisplit o con tu aire acondicionado.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: '#learn-more',
    title: 'Servicio en Línea',
    description: `Cotiza sin compromiso a nuestro WhatsApp o Llama sin compromiso al 9983816839`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Servicio Garantizado"
          description="Si tu aire acondicionado o tu minisplit ya no funciona, no te preocupes mas te ayudamos a recuperar tu inversión, a un costo de gran conveniencia para tu bolsillo."
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
