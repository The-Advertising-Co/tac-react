import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiCheck } from "react-icons/fi";

class TabsOne extends Component{
    render(){
        let 
        tab1 = "Our history", 
        tab2 = "Our mission",
        tab3 = "Friendly Support";
        const { tabStyle } = this.props;
        var namesItemOne = [
            'Deep insights into business analytics.',
            'Fast-tracked strategies for scaling your business.',
            'Cutting through the noise with honest, effective marketing.',
            'Comprehensive solutions tailored to your needs.',
        ];
       
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p>At the heart of everything we do is a commitment to delivering excellence. We partner with you to create impactful campaigns that drive results, foster engagement, and build lasting relationships with your audience.</p>

                                           <div className="mt--30">
                                               <h4>What We Offer</h4>
                                               <ul className="list-style--1">
                                                   {namesItemOne.map((name, index) => {
                                                       return <li key={ index }><FiCheck /> {name}</li>;
                                                   })}
                                               </ul>
                                           </div>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p>At The Advertising Company, our mission is to transform ideas into impactful stories that captivate and inspire. We are dedicated to pushing the boundaries of creativity, blending innovation with strategic thinking to deliver exceptional results for our clients. Our commitment is to create memorable experiences that resonate with audiences, build lasting brand value, and drive success across all platforms. We believe in the power of collaboration, passion, and creativity to turn visions into reality.</p>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p>Popy ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>
                                           <p>Popy ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>
                                           <p>Popy ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsOne;