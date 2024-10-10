
import React, { Component } from "react";
import strip from "../../assets/images/brand/striplogos.png";

const FeaturedInSection = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>As Featured In</h2>
      <div style={styles.logoContainer}>
        
        <img src={strip} alt="Logo Images" style={styles.logo} />
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '50px 20px',
    backgroundColor: '#fff', // White background
    textAlign: 'center',
  },
  heading: {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  logo: {
    maxWidth: '100%',
    height: 'auto',
    width: 'auto',
    maxHeight: '80px', // Adjust based on how large you want the logos to appear
  },
};

export default FeaturedInSection;
