import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";



const ServiceList = [
    {
        
        title: 'Website Design',
        description: 'Create visually stunning, user-friendly designs that captivate your audience and effectively communicate your brand.'
    },
    {
        
        title: 'Website Development',
        description: 'Create robust, scalable websites with cutting-edge technologies to guarantee high performance, security, and a seamless user experience.'
    },
    {
        
        title: 'Site Migration',
        description: 'Retain your website’s visibility and rankings with our expert site migration services. Our approach minimises the impact on search engine performance.'
    },
    {
        
        title: 'Technical SEO',
        description: 'Enhance your site with technical SEO elements like page speed, schema markup, and crawl error fixes. Our experts ensure effective crawling and indexing by search engines.'
    },
    {
        
        title: 'Lead Generation',
        description: 'Implement effective lead generation strategies to attract and convert potential customers. Our tailored solutions help drive targeted traffic and increase conversion rates.'
    },
    {
        
        title: 'E-commerce',
        description: 'Develop and optimise your e-commerce platform to drive sales and enhance the customer shopping experience. Our solutions ensure seamless integration, security, and performance.'
    },
]
class WebsiteFeatures extends Component{
    render(){
        return(
            <React.Fragment>

                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
                    <div className="container">
                        <div className="row creative-service">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
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
                    </div>
                </div>
                {/* End Service Area */}

            </React.Fragment>
        )
    }
}
export default WebsiteFeatures;