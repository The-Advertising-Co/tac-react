import React, { Component } from "react";
import PortfolioList from "../../elements/portfolio/PortfolioList";


const list = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]


class ShowCase extends Component{
    render(){
        return(
            <React.Fragment>
                

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">Website Gallery
                                        </h2>
                                        <p>VIEW OUR MOST RECENT WORK
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-left mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More Project</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                
            </React.Fragment>
        )
    }
}
export default ShowCase;