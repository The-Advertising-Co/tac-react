import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin, FiGlobe } from "react-icons/fi";
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17" data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Contact Us</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start About Us Section */}
                <div className="rn-about-us-area ptb--80 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-us-content text-center">
                                    <h3>About Us</h3>
                                    <p>
                                        We are The Advertising Company, specializing in digital marketing strategies that help businesses grow. Our expertise spans across professional website design, social media reach, and Google Search campaigns to help you get the best out of your advertising budget.
                                    </p>
                                    <p>
                                        Our mission is to enhance your online presence and drive real results for your business. With a team of specialists ready to assist, we will ensure that your brand reaches its full potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Us Section */}

                {/* Start Talk to a Specialist Area */}
                <div style={{ backgroundColor: '#000', color: '#fff', padding: '60px 0' }}>
                    <div className="container">
                        <div className="row">
                            {/* Left Column */}
                            <div className="col-md-6">
                                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>
    TALK TO A SPECIALIST
</h4>

                                <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Let's Talk Business</h2>
                                <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
                                    At The Advertising Company, we specialize in digital marketing strategies that enhance your online presence and drive results.
                                </p>
                                <a href="/about" style={{
                                    display: 'inline-block',
                                    backgroundColor: '#fdd835',
                                    color: '#000',
                                    padding: '12px 24px',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    borderRadius: '4px'
                                }}>ABOUT US</a>
                            </div>

                            {/* Right Column */}
                            <div className="col-md-6">
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '20px',
                                    fontSize: '18px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <FiHeadphones style={{ fontSize: '24px' }} />
                                        <span>0430799235</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <FiMail style={{ fontSize: '24px' }} />
                                        <span>support@theadvertisingcompany.com</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <FiGlobe style={{ fontSize: '24px' }} />
                                        <span>theadvertisingcompany.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Talk to a Specialist Area */}

                {/* Start Contact Page Area */}
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div>
                {/* End Contact Page Area */}

                {/* Start Embedded Google Map */}
                <div className="rn-contact-map-area position-relative">
                    <div style={{ width: '100vw', height: '500px', marginLeft: 'calc(-50vw + 50%)' }}>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.884346719966!2d151.20182577539395!3d-33.86623477472233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3bb2a7a26f%3A0xe8e2902c228c2084!2sThe%20Advertising%20Company!5e0!3m2!1sen!2sau!4v1696966338394!5m2!1sen!2sau"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>
                </div>
                {/* End Embedded Google Map */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;
