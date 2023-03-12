import React, { useState } from "react";
import './style.css';
import temp from "./images/temp.svg";

export const Climate = ({temperature,humidity}) => {
    const [temperatureState, setTemperatureState] = useState(temperature)

    const higherTem = () => {
       return ( setTemperatureState(temperatureState + 1))
    }
    const lowerTem = () => {
        return ( setTemperatureState(temperatureState - 1))
     }

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp}/>
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temperatureState}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={higherTem}>+</button>
                <button className="button"
                onClick={lowerTem}>-</button>
            </div>
		</div>
    )
}