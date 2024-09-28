import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | The Advertising Company </title>
                    <meta name="description" content="The Advertising Company provides appealing, professional websites, broad social media reach, effective Google Search campaigns, and tools to maximize your advertising budget." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
