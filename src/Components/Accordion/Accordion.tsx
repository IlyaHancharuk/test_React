import React, { useState } from "react";
import Rating from "../Rating/Rating";

type AcordionPropsType = {
    titleValue: string;
}

type AcordionTitlePropsType = {
    title: string;
    collapsedToggler: () => void;
}

const Accordion = (props: AcordionPropsType) => {

    const [collapsedValue, setCollapsedValue] = useState(false);

    function collapsedToggler() {
        collapsedValue ? setCollapsedValue(false) : setCollapsedValue(true);
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsedToggler={collapsedToggler} />
            {!collapsedValue && <AccordionBody />}
        </div>
    )
}

const AccordionTitle = (props: AcordionTitlePropsType) => {

    return (
        <h3 onClick={() => {props.collapsedToggler()}}>--{props.title}--</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1
                <Rating />
            </li>
            <li>2
                <Rating />
            </li>
            <li>3
                <Rating />
            </li>
        </ul>
    )
}

export default Accordion;
