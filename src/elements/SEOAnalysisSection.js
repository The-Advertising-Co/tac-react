import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast, FiLayers, FiUsers, FiMonitor, FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import SEOAnalysisSection from "./SEOAnalysisSection"; // Import the new section

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Web Design & Development',
        description: 'Create a professional and user-friendly website. Our team delivers responsive and visually appealing sites.'
    },
    {
        icon: <FiLayers />,
        title: 'Pay Per Click (PPC)',
        description: 'Boost your visibility and traffic with targeted PPC ads. We optimise for maximum ROI and immediate results.'
    },
    {
        icon: <FiUsers />,
        title: 'Social Media Marketing',
        description: 'Increase brand visibility and engagement on social media with tailored content and strategies.'
    },
    {
        icon: <FiMonitor />,
        title: 'Email Marketing',
        description: 'Reach your audience with personalised email campaigns designed to boost engagement and conversions.'
    },
    {
        icon: <FiCast />,
        title: 'Creative Design',
        description: 'Enhance your brand with impactful design services, including logos and complete branding solutions.'
    },
    {
        icon: <FiMonitor />,
        title: 'Search Engine Optimisation',
        description: 'Improve your search engine rankings and attract more organic traffic with our effective SEO strategies.'
    },
];

class Service extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle="Service" />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrumb Area */}
                <Breadcrumb title={'Service'} />
                {/* End Breadcrumb Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Our Services</h2>
                                    <p>
                                        Discover a wide array of marketing and advertising solutions tailored to your business needs. From digital strategy and branding to creative design and media placement, our team ensures your brand stands out in today’s competitive landscape. Explore services that are designed to drive growth and capture your audience’s attention, without compromising on quality or innovation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Service Items */}
                        <div className="row service-one-wrapper">
                            {ServiceList.map((val, i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* SEO Analysis Section */}
                        <div className="row service-one-wrapper mt--50">
                            <SEOAnalysisSection />
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

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

export default Service;
