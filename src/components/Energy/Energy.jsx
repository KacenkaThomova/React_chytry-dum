import React from "react";
import './style.css';
import electricity_img from './images/electricity.svg'
import water_img from './images/water.svg'

export const Energy = ({electricity,water}) => {
    return (
    <div className="energy">
        <div className="energy__source">
            <div className="energy__icon">
                <img src={electricity_img}/>
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Elektřina</div>
                <div className="energy__value">{electricity} kW</div>
            </div>
        </div>
        <div className="energy__source">
            <div className="energy__icon">
                <img src={water_img}/>
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Voda</div>
                <div className="energy__value">{water} m<sup>3</sup></div>
            </div>
        </div>
    </div>

    )
}