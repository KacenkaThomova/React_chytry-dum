import React from "react";
import { Light } from "../Light/Light";
import './style.css';
export const Lights = ({lights}) => {
    return (
    <div className="lights">
        {lights.map((light)=> (
        <Light
            key={light.name}
            name={light.name}
            state={light.state}
        />
        ))}
        
    </div>
    )
}