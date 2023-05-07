import React, { CSSProperties } from 'react';
import Typist from 'react-typist';
import { motion } from 'framer-motion';
import Particles from 'react-particles-js';

const neonGreen1 = '#39ff14';
const neonGreen2 = '#2adddd';

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(45deg, ${neonGreen1}, ${neonGreen2})`,
    fontFamily: 'Arial, sans-serif',
  },
  particles: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
  banner: {
    textAlign: 'center',
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
textShadow: `2px 2px 5px ${neonGreen1}, -2px -2px 5px ${neonGreen2}`,
  },
  subtitle: {
    marginTop: '1rem',
    color: 'white',
    fontSize: '1.5rem',
  },
  description: {
    marginTop: '1rem',
    color: 'white',
    fontSize: '1.2rem',
    maxWidth: '800px',
    lineHeight: '1.5',
    textAlign: 'justify',
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const IndexPage = () => (
  <div style={styles.container}>
    <Particles style={styles.particles} />
    <div style={styles.content}>
      <motion.h1 style={styles.banner} initial="hidden" animate="visible" variants={fadeInUpVariants}>
        <Typist>Lowly Land Circus Division</Typist>
      </motion.h1>
      <motion.h2 style={styles.subtitle} initial="hidden" animate="visible" variants={fadeInUpVariants} transition={{ delay: 2 }}>
        Where imagination Meets Reality
      </motion.h2>
      <motion.p style={styles.description} initial="hidden" animate="visible" variants={fadeInUpVariants} transition={{ delay: 3 }}>
        Welcome to the Lowly Land Circus Division, where we combine cutting-edge technology with the artistry of circus performance. Our one-of-a-kind acts blend traditional circus skills with modern innovations, creating unforgettable experiences for audiences of all ages. Step right up and prepare to be amazed by our mesmerizing live performances, experiences and interactions. The show is about to begin!
      </motion.p>
    </div>
  </div>
);

export default IndexPage;
