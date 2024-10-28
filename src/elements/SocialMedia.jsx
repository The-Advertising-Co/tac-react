import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Services.css"; // Use modular CSS or styled-components for styling

const Services = () => {
  const servicesData = [
    {
      title: "Brand Strategy",
      description: "Develop a strong brand strategy to establish your business’s identity in the market.",
      image: "/path/to/brand-strategy.jpg", // Replace with actual image path
    },
    {
      title: "Digital Marketing",
      description: "Reach your audience through digital channels and optimize for engagement and growth.",
      image: "/path/to/digital-marketing.jpg",
    },
    {
      title: "Creative Content",
      description: "Engage your audience with compelling content tailored to your brand.",
      image: "/path/to/creative-content.jpg",
    },
    {
      title: "Media Planning",
      description: "Optimize your media budget to maximize visibility and impact.",
      image: "/path/to/media-planning.jpg",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="hero-section bg_image bg_image--services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="hero-title">Our Services</h1>
              <p className="hero-subtitle">
                Helping your brand reach new heights through tailored marketing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list-section">
        <div className="container">
          <div className="row">
            {servicesData.map((service, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-sm-12 service-item">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h3>Ready to take your brand to the next level?</h3>
          <p>Contact us today to discuss how we can support your marketing journey.</p>
          <a href="/contact" className="cta-btn">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
