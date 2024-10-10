import React from 'react';


const FeatureSection = () => {
  return (
    <div style={styles.container}>

      <div style={styles.featureContainer}>
        <div style={styles.featureItem}>
          <img src="/path-to-image-1.png" alt="Boost Sales" style={styles.icon} />
          <h2 style={styles.title}>Boost Sales</h2>
          <p style={styles.description}>
            Use data-driven strategies, enhance sales, and achieve superior results.
          </p>
        </div>

        <div style={styles.featureItem}>
          <img src="../../assets/images/icons/Brand.png" alt="Website Upgrade" style={styles.icon} />
          
          <h2 style={styles.title}>Website Upgrade</h2>
          <p style={styles.description}>
            Optimize your website content for clarity, improve user experience, and impact.
          </p>
        </div>

        <div style={styles.featureItem}>
          <img src="/path-to-image-3.png" alt="Brand Expansion" style={styles.icon} />
          <h2 style={styles.title}>Brand Expansion</h2>
          <p style={styles.description}>
            Expand your brand’s influence through targeted content, and engage effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    background: 'linear-gradient(to bottom, #1a1a1a, #feca00)', // Gradient background
    padding: '70px 20px', // Padding for top and sides
    textAlign: 'center',
  },
  header: {
    marginBottom: '40px', // Space between header and features
  },
  heading: {
    fontSize: '3em',
    fontWeight: 'bold',
    color: '#fff',
  },
  subheading: {
    fontSize: '1.5em',
    color: '#fff',
  },
  tagline: {
    fontSize: '1.2em',
    color: '#ddd',
    marginBottom: '50px',
  },
  featureContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  featureItem: {
    backgroundColor: '#ffcc00', // Yellow background for feature boxes
    padding: '30px',
    borderRadius: '10px',
    width: '300px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)', // Floating shadow effect
    textAlign: 'center',
  },
  icon: {
    width: '60px',
    height: 'auto',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#000',
  },
  description: {
    fontSize: '1em',
    color: '#333',
  },
};

export default FeatureSection;
