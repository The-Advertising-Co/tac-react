import React, { Component, Fragment } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SocialMedia from "../elements/social-media";
import PayPerClick from "../elements/pay-per-click";
import WebDesignAndSEO from "../elements/web-design-and-seo";
import GraphicDesign from "../elements/graphic-design";
import EmailMarketing from "../elements/email-marketing";
import Home from "../pages/Home";

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                    
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/social-media" element={<SocialMedia />} />
                        <Route path="/pay-per-click" element={<PayPerClick />} />
                        <Route path="/web-design-and-seo" element={<WebDesignAndSEO />} />
                        <Route path="/graphic-design" element={<GraphicDesign />} />
                        <Route path="/email-marketing" element={<EmailMarketing />} />
                    </Routes>

                    {/* Start Back To Top */}
                    <div className="backto-top">
                        <ScrollToTop showUnder={160}>
                            <FiChevronUp />
                        </ScrollToTop>
                    </div>
                    {/* End Back To Top */}
                    
                    <Footer />
                </Fragment>
            </Router>
        );
    }
}

export default App;
