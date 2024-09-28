import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import testimonialImg1 from "../assets/images/client/1.jpg";
import testimonialImg2 from "../assets/images/client/2.jpg";
import testimonialImg3 from "../assets/images/client/3.jpg";
import testimonialImg4 from "../assets/images/client/4.jpg";
import testimonialImg5 from "../assets/images/client/5.jpg";

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Working with The Advertising Company has been a game-changer for our brand. Their innovative approach and attention to detail helped us connect with our audience in a way we never thought possible.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Aklima </span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      The team at The Advertising Company truly understands the art of storytelling. They transformed our brand message into something powerful and engaging. We couldn't be happier with the results.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Fatima</span>
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      From concept to execution, The Advertising Company delivered exceptional service and creativity. Their strategies not only met our expectations but exceeded them, driving real results.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Mel</span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      The Advertising Company brought our vision to life with their innovative ideas and strategic approach. Their commitment to our brand’s success was evident in every step of the process.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Dexter</span>
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Partnering with The Advertising Company was the best decision we made for our marketing efforts. Their expertise and dedication resulted in a significant boost to our brand visibility and engagement
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>John</span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabList className="testimonial-thumb-wrapper">
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg1} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg2} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg3} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg4} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg5} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
