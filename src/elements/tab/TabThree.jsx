import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import portfolio1 from "../../assets/images/portfolio/web.png";
import portfolio2 from "../../assets/images/portfolio/ppc.png";
import portfolio3 from "../../assets/images/portfolio/ads.png";
import portfolio4 from "../../assets/images/portfolio/email.png";
import portfolio5 from "../../assets/images/portfolio/design.png";
import portfolio6 from "../../assets/images/portfolio/seo.png";
import portfolio7 from "../../assets/images/portfolio/big/dp-portfolio-07.jpg";
import portfolio8 from "../../assets/images/portfolio/big/dp-portfolio-08.jpg";
import portfolio9 from "../../assets/images/portfolio/big/dp-portfolio-09.jpg";
import portfolio10 from "../../assets/images/portfolio/big/dp-big--portfolio-10.jpg";
import portfolio11 from "../../assets/images/portfolio/big/dp-big--portfolio-11.jpg";

const TabOne = [
  {
    image: portfolio1,
    bigImage: portfolio1,
    category: "Create a professional and user-friendly website.",
    title: "Web Design & Development",
    link: "/services/web-design", // Add individual link
  },
  {
    image: portfolio2,
    bigImage: portfolio2,
    category: "Boost your visibility and traffic with targeted PPC ads.",
    title: "Pay Per Click (PPC)",
    link: "/services/mobile-app", // Add individual link
  },
  {
    image: portfolio3,
    bigImage: portfolio3,
    category: "Increase brand visibility and engagement on social media with tailored content.",
    title: "Social Media Marketing",
    link: "/services/mobile-app-landing", // Add individual link
  },
  {
    image: portfolio4,
    bigImage: portfolio4,
    category: "Reach your audience with personalised email campaigns designed to boost engagement.",
    title: "Email Marketing",
    link: "/services/logo-design", // Add individual link
  },
  {
    image: portfolio5,
    bigImage: portfolio5,
    category: "Enhance your brand with impactful design services and complete branding.",
    title: "Creative Design",
    link: "/services/t-shirt-design", // Add individual link
  },
  {
    image: portfolio6,
    bigImage: portfolio6,
    category: "Improve your search engine rankings and attract more organic traffic.",
    title: "Search Engine Optimisation",
    link: "/services/logo-design-tickets", // Add individual link
  },
  
 
];

class TabStyleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: 0,
      isOpen: false,
    };
  }

  render() {
    const { column } = this.props;
    const { tab1, isOpen } = this.state;

    return (
      <div>
        <Tabs>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tablist-inner">
                <TabList className="pv-tab-button text-center mt--0">
                  <Tab>
                    <span>All Services</span>
                  </Tab>
                  <Tab>
                    <span>Web Design</span>
                  </Tab>
                  <Tab>
                    <span>Branding</span>
                  </Tab>
                  <Tab>
                    <span>Digital Marketing</span>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>

          <TabPanel className="row row--35">
            {TabOne.map((value, index) => (
              <div className={`${column}`} key={index}>
                {isOpen && (
                  <Lightbox
                    mainSrc={TabOne[tab1].bigImage}
                    nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                    prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        tab1: (tab1 + 1) % TabOne.length,
                      })
                    }
                    imageLoadErrorMessage="Image Loading ..."
                    enableZoom={false}
                  />
                )}
                <div className="item-portfolio-static">
                  <div
                    onClick={() => this.setState({ isOpen: true, tab1: index })}
                  >
                    <div className="portfolio-static">
                      <div className="thumbnail-inner">
                        <div className="thumbnail">
                          <a href={value.link}>
                            <img src={value.image} alt="Portfolio Images" />
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <h4>
                            <a href={value.link}>{value.title}</a>
                          </h4>
                          <p>{value.category}</p> {/* Category moved to the bottom */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabStyleThree;
