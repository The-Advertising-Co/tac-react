import React, { Component, Fragment } from "react";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { slideSlick } from "../page-demo/script";
import ServiceList from "../elements/service/ServiceList";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/Footer";
import Testimonial from "../elements/Testimonial";
import PortfolioList from "../elements/portfolio/PortfolioList";
import BlogContent from "../elements/blog/BlogContent";
import Brand from "../elements/Brand";
import BrandTwo from "../elements/BrandTwo";
import CallAction from "../elements/callaction/CallAction";
import TabOne from "../elements/tab/TabOne";
import Helmet from "../component/common/Helmet";
import CounterOne from "../elements/counters/CounterOne";

import about from "../assets/images/about/about-3.jpg";

const SlideList = [
  {
    textPosition: "text-center",
    bgImage: "bg_image--21",
    category: "",
    title: "A creative solutions company",
    description:
      "Tailored Marketing Strategies For Measurable Growth",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--23",
    category: "",
    title: "Development.",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--22",
    category: "",
    title: "UX Research.",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--20",
    category: "",
    title: "UX Research.",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

class DigitalAgency extends Component {
  render() {
    const PostList = BlogContent.slice(0, 3);
    let title = "About",
      description =
        "Every brand has a story, and we're here to tell it in the most compelling way. Through innovative strategies and creative solutions, we ensure that your message resonates with your audience. Our team is dedicated to elevating your brand's presence across all platforms.";
    return (
      <Fragment>
        <Helmet pageTitle="Welcome" />

        {/* Start Header Area  */}
        <Header logo="light" color="color-white" />
        {/* End Header Area  */}

        {/* Start Slider Area   */}
        <div className="slider-wrapper color-white">
          <div className="slider-activation slider-digital-agency">
            <Slider className="rn-slick-dot dot-light" {...slideSlick}>
              {SlideList.map((value, index) => (
                <div
                  className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                  key={index}
                  data-black-overlay="2"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={`inner ${value.textPosition}`}>
                          {value.category ? <span>{value.category}</span> : ""}
                          {value.title ? (
                            <h1 className="title">{value.title}</h1>
                          ) : (
                            ""
                          )}
                          {value.description ? (
                            <p className="description">{value.description}</p>
                          ) : (
                            ""
                          )}
                          {value.buttonText ? (
                            <div className="slide-btn">
                              <a
                                className="rn-button-style--2 btn-primary-color"
                                href={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start Service Area  */}
        <div className="service-area pt--120 pb--50 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30">
                  <h2 className="title">Our Service</h2>
                  <p>
                  Discover innovative advertising strategies that connect with your audience and elevate your brand above the competition.
                  </p>
                </div>
              </div>
            </div>
            <ServiceList
              item="6"
              column="col-lg-4 col-md-6 col-sm-6 col-12 text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area ptb--120 bg_image bg_image--3">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--15">
                    <h2 className="title" style={{ color: 'white' }}>Our Projects</h2>
                    <p style={{ color: 'white' }}>
                    Explore a diverse range of creative works. While many approaches exist, our projects stand out with originality and innovation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="3"
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 text-center">
                    <a
                      className="rn-button-style--2 btn-solid"
                      href="/portfolio"
                    >
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start About Area */}
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={about}
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <TabOne tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area ptb--120 bg_color--5">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start CounterUp Area */}
            <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <h3 className="fontWeight500">Our Fun Facts</h3>
                    </div>
                  </div>
                </div>
                <CounterOne />
              </div>
            </div>
            {/* End CounterUp Area */}

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

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default DigitalAgency;
