/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/blog/1.jpg';
import thumb2 from 'assets/images/blog/2.jpg';
import thumb3 from 'assets/images/blog/3.jpeg';
import thumb4 from 'assets/images/blog/4.jpeg';

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
    title: `Multiple art board prototype with Figma`,
    description: `Beyond launched anti bias, a Chrome extension that replaces LinkedIn profile photos`,
  },
  {
    id: 5,
    slug: '#how-to',
    thumbnail: thumb4,
    showDescription: false,
    title: `Team presentation with latest user interface & experience reach more`,
    description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
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
          description="¿Tu lavadora, Secadora, Centro de Lavado ya sea Industrial o Residencial ya no funciona? Contactanos y Cotiza sin compromiso."
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
