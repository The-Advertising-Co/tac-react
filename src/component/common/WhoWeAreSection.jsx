import React from 'react';
import serviceImg from "../../assets/images/service/desktop-device-1.webp";

const WhoWeAreSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>
          <span style={styles.highlight}>Who We Are</span>
        </h2>
        <p style={styles.description}>
          We are a team of dedicated web design experts committed to helping businesses succeed online.
          Our services span from strategic planning to detailed performance analysis, ensuring your
          website is effective and impactful.
        </p>
      </div>
      <div style={styles.imageContainer}>
      <div className="thumb">
                          <img
                            className="w-100"
                            src={serviceImg}
                            alt="Service Images"
                          />
                        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000', // Black background
    padding: '50px 10px', // Reduced padding
    color: '#fff',
    minHeight: '100px', // Reduced height from 500px to 400px
    maxWidth: '100%', // Limit the max width to 1200px
    margin: '0 auto', // Centering the container
  },
  textContainer: {
    flex: 1,
    maxWidth: '50%',
    paddingRight: '20px',
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '20px',
  },
  highlight: {
    color: '#feca00', // Yellow color for "Who We Are"
  },
  description: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    color: '#ddd',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    maxWidth: '500px',
    height: 'auto',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)', // Shadow for the image
  },
};

export default WhoWeAreSection;
