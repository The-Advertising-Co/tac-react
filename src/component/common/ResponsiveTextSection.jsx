import React, { useState, useEffect } from 'react';

const ResponsiveTextSection = () => {
  const [emphasisText, setEmphasisText] = useState('Incredibly');

  // Change the text from 'Incredibly' to 'Extremely' after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setEmphasisText('Extremely');
    }, 2000); // Change after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        Our websites are{' '}
        <span style={styles.emphasis}>{emphasisText}</span> beautiful and fully
        responsive.
      </h2>
      <p style={styles.description}>
        Our team creates visually stunning, user-friendly websites that captivate your audience
        and communicate your brand. We build robust, scalable sites with the latest technologies
        for high performance and security. Our experts enhance your site with technical SEO elements
        like page speed, schema markup, and crawl error fixes for effective crawling and indexing.
      </p>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
    maxWidth: '800px',
    margin: '0 auto', // Centers the content
  },
  heading: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  emphasis: {
    fontWeight: 'bold',
    fontSize: '1em',
    display: 'inline-block',
    backgroundColor: '#000', // Black background for emphasis
    color: '#fff', // White text color for the emphasized word
    padding: '0 10px',
    borderRadius: '5px',
  },
  description: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
  },
};

export default ResponsiveTextSection;
