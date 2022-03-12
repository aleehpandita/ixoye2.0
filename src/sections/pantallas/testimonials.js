/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { rgba } from 'polished';
//import quote from 'assets/images/icons/quote.png';
import uber from 'assets/images/logos/samsung.png';
import google from 'assets/images/logos/sony.png';
import paypal from 'assets/images/logos/hisense.png';
import microsoft from 'assets/images/logos/phillips.png';
import dribbble from 'assets/images/logos/lg.png';

const data = [
  {
    id: 1,
    logo: uber,
    author: 'Reparacion de Refrigerador Samsung',
    quote: `Técnicos altamente calificados en todas las marcas con repuestos originales. Garantizamos la reparación de sus pantallas OLED y/o PLASMA.`,
  },
  {
    id: 2,
    logo: google,
    author: 'Reparacion de Pantallas Sony',
    quote: `Contamos con el respaldo de las mejores marcas, permitiéndonos así brindar la mejor garantía en sus mantenimientos y reparaciones.`,
  },
  {
    id: 3,
    logo: paypal,
    author: 'Reparacion de Refrigerador Hisense',
    quote: `Un Servicio Cerca de ti con Tecnicos Capacitados por las Mejores Marcas del Mercado`,
  },
  {
    id: 4,
    logo: microsoft,
    author: 'Reparacion de Refrigerador Phillips',
    quote: `Damos el mejor servicio de reparación de plasmas las 24 horas y los 365 días del año. Somos tu mejor opción, solo llámanos, nosotros vamos a donde nos solicites.`,
  },
  {
    id: 5,
    logo: dribbble,
    author: 'Reparacion de Refrigerador LG',
    quote: `Técnicos especializados en todas las marcas. Reparacion de Televisores. Reparación de Pantallas PLASMA, Reparacion de Pantallas OLED y pantallas LED`,
  },
];

const Testimonials = () => {
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          tabPosition="bottom"
        >
          {data?.map((item) => (
            <TabPane key={item.id} tab={<Image src={item.logo} alt="logo" />}>
              <Box as="blockquote">
                {item.quote}
                <Text as="span" sx={styles.author}>
                  {item.author}
                </Text>
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [9, null, null, 10, 11],
  },
  tabs: {
    border: 0,
    flexDirection: ['column-reverse', null, null, null, null, 'column'],
    '.rc-tabs-nav': {
      mt: [8, null, null, 9, 11],
    },
    '.rc-tabs-nav-wrap': {
      borderTop: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
    },
    '.rc-tabs-tab-btn': {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      outline: 0,
      img: {
        outline: 0,
        maxWidth: [50, 65, null, 110, '80%', '100%'],
        m: ['0 auto'],
      },
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pt: [4, null, null, 7, 9],
    },
    '.rc-tabs-tabpane': {
      outline: 0,
      blockquote: {
        fontFamily: 'heading',
        fontWeight: 300,
        fontSize: [2, null, null, 3, 4, 6],
        lineHeight: [1.87, null, null, 2.08],
        position: 'relative',
        maxWidth: 806,
        margin: '0px auto',
        pt: ['6px', null, null, '10px', '10px'],
        pl: [30, 30, 30, 10, 11],
        ':before': {
          content: `''`,
          position: 'absolute',
          width: 128,
          height: 43,
          left: ['-31px', null, null, '-16px', '-7px', 0],
          top: ['1px', '1px', '1px', 0],
          backgroundSize: ['75%', null, null, '100%'],
        },
      },
      span: {
        color: '#7E8896',
        fontFamily: 'body',
        display: 'flex',
        fontWeight: 500,
        fontSize: [0, 1, 1, 2],
        lineHeight: 2.5,
        mt: [1, null, null, 3],
      },
    },
    '.rc-tabs-ink-bar': {
      top: 0,
      height: 2,
      backgroundColor: '#A17857',
      borderRadius: 5,
    },
  },
};
