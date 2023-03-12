import React, { useState } from "react";
import lightOn from './images/light-on.svg';
import lightOff from './images/light-off.svg';
import './style.css';

export const Light = ({name, state}) => {
    const [lightState, setLightState] = useState(state)
    const handleCLick = () => { 
        if (lightState === 'on') {
            setLightState('off')
         } 
         else {
            setLightState('on')
         }
    }

    return ( 
        <div className="light" onClick={handleCLick}>
            <div className="light__icon">
             <img src={lightState ==='on' ? lightOn : lightOff} alt={lightState}/>
            </div>
            <div className="light__name">
			 {name}
			</div>
        </div>
    )
}
