import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

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
        icon: <FiUsers />,
        title: 'Creative Design',
        description: 'Enhance your brand with impactful design services, including logos and complete branding solutions.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Search Engine Optimisation',
        description: 'Improve your search engine rankings and attract more organic traffic with our effective SEO strategies.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
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
            </React.Fragment>
        )
    }
}
export default ServiceThree;
