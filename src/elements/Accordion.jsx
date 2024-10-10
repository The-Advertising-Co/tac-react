import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


class Accordion01 extends Component {
    render(){
        return(
            <Accordion className="accodion-style--1" preExpanded={'0'}>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Social Media Marketing
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Expert management of organic and paid social media strategies to engage audiences and drive measurable success.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Pay-Per-Click (PPC)
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        Strategic PPC campaigns designed to drive targeted traffic and maximise return on investment.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Website Design
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        Development of visually appealing, user-friendly websites that effectively convey the brand’s message and increase customer conversion rates.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Creative Design
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        Crafting unique visual identities and compelling graphics that captivate and distinguish brands in the competitive market.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>
        )
    }
}

export default Accordion01;





