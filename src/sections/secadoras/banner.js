/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import illustration from 'assets/images/banner-illustration.png';
import imgwplogo from 'assets/images/logos/wp.png';

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Reparación & Matenimiento de Lavadoras & Secadoras"
            description="¿Problemas en tu hogar u oficina? Servicio a domicilio 24/7"
          />
          <Box as="figure" sx={styles.illustration}>
            <Box sx={styles.buttonWrapper}>
            <a sx={styles.href} target="_blank" href='https://api.whatsapp.com/send?phone=529983816839&text=Hola!%20estoy%20interesado%20en%20los%20servicios%20de%20Mantenimiento' className='text-underline-none'>
              <Button><Image src={imgwplogo} alt="close" width="25" height="10" /> Cotiza por WhatsApp</Button>
            </a>
            </Box>
            <Image src={illustration} alt="illustration" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  href:{
    textDecoration:'none',
  },
  section: {
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    ':before': {
      backgroundColor: rgba('#FFF5ED', 0.5),
      content: ['none', null, null, `''`],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 62,
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
    },
  },
  illustration: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['none', null, null, 'block'],
      maxWidth: ['80%'],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
    textAlign: ['center'],
    position: ['static', null, null, 'absolute'],
    left: '50%',
    top: 0,
    transform: ['unset', null, null, 'translateX(-50%)'],
  },
};
