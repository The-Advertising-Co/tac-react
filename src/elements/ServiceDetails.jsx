import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import FeatureSection from "../component/common/FeatureSection";
import ResponsiveTextSection from "../component/common/ResponsiveTextSection";
import WebsiteFeatures from "../component/common/WebsiteFeatures";
import WhoWeAreSection from "../component/common/WhoWeAreSection";
import ShowCase from "../component/common/ShowCase";
import Testimonial from "../elements/Testimonial";


import serviceImg from "../assets/images/service/desktop-device-1.webp";
import serviceImg2 from "../assets/images/service/service-02.png";
import serviceImg3 from "../assets/images/service/Screenshot_1.png";
import findingImg from "../assets/images/about/finding-us-01.png";


class ServiceDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="Service Details" />
        {/* End Pagehelmet  */}

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>DO YOU NEED A NEW</h3>
                  <h2 className="title theme-gradient">WEBSITE?</h2>
                  <p>Explore how our web design expertise can transform your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}
        <FeatureSection />
        <ResponsiveTextSection />
        <WebsiteFeatures />
        <WhoWeAreSection />
        <ShowCase />
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}
         {/* Start Finding Us Area  */}
         <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">Discover Your Next Opportunity</h4>
                <p>
                  Don’t let distractions keep you from finding the perfect fit. Dive into our tailored solutions designed to help you focus on what truly matters—getting your message across effectively. Let us guide you to success.
                </p>
                <a className="rn-btn btn-white" href="/portfolio">
                  Get Started
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img src={findingImg} alt="Finding Images" />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default ServiceDetails;
