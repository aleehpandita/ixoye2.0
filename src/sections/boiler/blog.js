/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/blog/boiler1.jpg';
import thumb2 from 'assets/images/blog/boiler2.jpg';
import thumb3 from 'assets/images/blog/boiler3.jpg';
import thumb4 from 'assets/images/blog/boiler4.jpg';

const data = [
  {
    id: 1,
    slug: '#how-to',
    thumbnail: thumb1,
    showDescription: true,
    title: `Refacciones originales directo del distribuidor autorizado`,
    description: `Nos comprometemos a dejar su aparato electrodomestico como nuevo, utilizando solo refacciones nuevas y originales.`,
  },
  {
    id: 2,
    slug: '#how-to',
    thumbnail: null,
    showDescription: false,
    title: `Los servicios que ofrecemos están garantizados, ya que nuestros técnicos son profesionales y están comprometidos con su trabajo.`,
    description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
  },
  {
    id: 3,
    slug: '#how-to',
    thumbnail: thumb3,
    showDescription: false,
    title: `Llamanos al 998 130 7542 para cotizar sin compromiso`,
    description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
  },
  {
    id: 4,
    slug: '#how-to',
    thumbnail: thumb2,
    showDescription: true,
    title: `Mantenimiento de Boilers`,
    description: `Solicita la reparación de tu calentador o tu boiler con tecnicos certificados por la marca.`,
  },
  {
    id: 5,
    slug: '#how-to',
    thumbnail: thumb4,
    showDescription: false,
    title: `No sufras más. Piezas y Refacciones Nuevas`,
    description: `Nosotros sólo utilizamos piezas y refacciones nuevas; originales de fábrica, para la reparación de sus calentadores de paso, electricos y de gas.`,
  },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="CENTRO DE SERVICIO Y REPARACIÓN"
          description="¿Tu Boiler, Calentador de gas, Calentador electrico ya no funciona? ¿Necesita una pieza original? ¿Ya no calienta tu boiler? Contactanos y Cotiza sin compromiso."
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [8, null, null, 9, null, 11],
    pb: [8, null, null, 9, null, 11],
    position: 'relative',
  },
  heading: {
    mb: [6, 6, 7, 11],
  },
};
