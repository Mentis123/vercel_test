import React, { CSSProperties } from 'react';

const neonGreen1 = '#39ff14';
const neonGreen2 = '#2adddd';

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(45deg, ${neonGreen1}, ${neonGreen2})`,
    fontFamily: 'Arial, sans-serif',
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

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.banner}>Lowly Labs Circus Division</h1>
      <p style={styles.subtitle}>Experience the Magic of the Circus!</p>
      <p style={styles.description}>
        Welcome to Lowly Labs Circus Division *, where imagination comes to life! Our world-class performers will take you on a mesmerizing journey through a realm of acrobatics, juggling, aerial arts, and more. As you step into our magical circus tent, prepare to be captivated by the dazzling array of talent, skill, and daring feats on display.
      </p>
      <p style={styles.description}>
        With a mix of traditional circus arts and innovative performances, Lowly Labs Circus Division offers a truly unique and unforgettable experience for all ages. Come join us and let your imagination soar as we transport you to a world of wonder and excitement, filled with breathtaking performances and enchanting surprises around every corner.  (*- PARODY ONLY - There is no Lowly Labs Circus Division!!!)
      </p>
    </div>
  );
};

export default HomePage;
