import React, { useState } from "react";

type OnOffPropsType = {
    isOn: boolean;
}

const OnOff = (props: OnOffPropsType) => {

    const [on, setOn] = useState(false);

    return (
        <div className="onOff">
            <div onClick={() => {setOn(true)}} className={`btn ${on && 'green'}`}>On</div>
            <div onClick={() => {setOn(false)}} className={`btn ${!on && 'red'}`}>Off</div>
            <div className={`indicator ${on ? 'green' : 'red'}`}></div>
        </div>
    )
}

export default OnOff;
