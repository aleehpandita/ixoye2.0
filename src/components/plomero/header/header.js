/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image } from 'theme-ui';
import Sticky from 'react-stickynode';
import Logo from 'components/plomero/logo';
import { NavLink } from 'components/link';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import menuItems from './header.data';
import imgwplogo from 'assets/images/logos/wp.png';

export default function Header() {
  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box as="header" sx={styles.header}>
            <Container>
              <Box sx={styles.headerInner}>
                <Logo sx={styles.logo} />
                <Box as="nav" sx={styles.navbar} className="navbar">
                  <Box as="ul" sx={styles.navList}>
                    {menuItems.map(({ path, label }, i) => (
                      <li key={i}>
                        <NavLink path={path} label={label} />
                      </li>
                    ))}
                  </Box>
                  <a sx={styles.href} target="_blank" href='https://api.whatsapp.com/send?phone=529981307542&text=Hola!%20estoy%20interesado%20en%20los%20servicios%20de%20Mantenimiento' className='text-underline-none'>
                  <Button variant="text" sx={styles.getStartedDesktop}>
                <Image src={imgwplogo} alt="close" width="35" height="20" />
                  </Button>
                  </a>
                </Box>
                <a sx={styles.href} target="_blank" href='https://api.whatsapp.com/send?phone=529981307542&text=Hola!%20estoy%20interesado%20en%20los%20servicios%20de%20Mantenimiento' className='text-underline-none'>
                <Button variant="text" sx={styles.getStartedMobile}>
                <Image src={imgwplogo} alt="close" width="35" height="20" />
                </Button>
                </a>
                <NavbarDrawer />
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  href:{
    textDecoration:'none',
  },
  headerWrapper: {
    backgroundColor: 'transparent',
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        paddingTop: '10px',
        paddingBottom: '10px',
      },
    },
  },
  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    py: 2,
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-mobile-menu': {
      backgroundColor: 'white',
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    mr: [null, null, null, null, 6, 12],
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
    // justifyContent: 'center',
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    // marginLeft: 'auto',
    flexGrow: 1,
    p: 0,
    'li:last-child': {
      ml: ['auto'],
    },
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: [0, 0, 0, 0, '0 10px'],
    },
    '.active': {
      color: 'primary',
    },
  },
  getStartedDesktop: {
    color: 'primary',
    display: ['none', 'none', 'none', 'none', 'flex'],
  },
  getStartedMobile: {
    color: 'primary',
    fontSize: [1],
    minHeight: 30,
    m: ['0 15px 0 auto'],
    padding: '0 11px',
    display: ['flex', null, null, null, 'none'],
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    path: {
      stroke: 'text',
    },
  },
};
