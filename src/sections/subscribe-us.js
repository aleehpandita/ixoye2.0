/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx, Box, Container, Button, Flex, Checkbox, Label } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Input from 'components/input';
import illustration from 'assets/images/subscribe-bg.png';

import { Link } from 'components/link';
import { FaBorderNone } from 'react-icons/fa';
const SubscribeUs = () => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };

  const handleCheckbox = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="¿Te gusto nuestro servicio?"
            description="Mandanos una reseña, queja o aclaración a nuestro correo contacto@servicioscancun.info y con gusto atenderemos tus dudas y/o sugerencias. Recuerda que puedes cotizar al número: 998 130 7542"

          />
          <Box sx={styles.subscribe} >
            <Flex sx={styles.inputGroup}>
              <Label htmlFor="email" variant="styles.srOnly">
                Email
              </Label>
              {/* <Input
                id="email"
                type="email"
                className="email-input"
                placeholder="Enter Email address"
              /> */}
               <a sx={styles.href} target="_blank" href='https://api.whatsapp.com/send?phone=529981307542&text=Hola!%20estoy%20interesado%20en%20los%20servicios%20de%20Mantenimiento' className='text-underline-none'>
              <Button className="btn-sm mb-4 mt-2 text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3" variant="secondary">contacto@servicioscancun.info</Button></a>
            </Flex>
            <Box sx={styles.checkbox}>
              {/* <Label htmlFor="no_spam" className={checked ? 'checked' : ''}>
                <Checkbox
                  id="no_spam"
                  onChange={handleCheckbox}
                  defaultChecked={checked}
                />
                Don’t provide any promotional message.
              </Label> */}
              {/* <Checkbox
                id="no_spam"
                checked={checked}
                onChange={handleCheckbox}
                label="Don’t provide any promotional message."
              /> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  href:{
    textDecoration:'none',
  },
  section: {
    background: [
      'none',
      null,
      null,
      `#F8F0EA url(${illustration}) no-repeat center bottom / contain`,
    ],
    pt: [8, null, null, null, 10],
    pb: [8, null, null, 9, 11],
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    p: [null, null, null, '40px 110px 50px', '50px 50px', '40px'],
    gap: '50px',
    display: ['block', null, 'grid', 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', null, 'left', 'center', 'left'],
    mb: ['30px', null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', null, null, null, 0],
      mr: ['auto', null, null, null, 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    '.email-input': {
      mr: [0, null, null, '15px'],
      minHeight: ['50px', '50px', '60px'],
    },
    button: {
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
      mt: ['15px', null, null, 0],
    },
  },
  inputGroup: {
    flexDirection: ['column', null, null, 'row'],
  },
  checkbox: {
    mt: ['24px'],
    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.14,
      color: rgba('#9095AD', 0.9),
      zIndex: 10,
      svg: {
        path: {
          fill: '#EFF3F7',
        },
      },
      '&.checked': {
        svg: {
          path: {
            fill: 'primary',
          },
        },
      },
    },
  },
};
