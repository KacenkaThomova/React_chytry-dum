import React from "react";
import './style.css';
import { Lights } from "../Lights/Lights";
import { Climate } from "../Climate/Climate";
import { Blinds } from "../Blinds/Blinds";
import { Energy } from "../Energy/Energy";

export const Dashboard = ({data}) => {
    return (
    <main className="dashboard">
        <Lights
         key={data.lights}
         lights={data.lights}/>
        <Climate
         key={data.temperature}
         temperature={data.climate.temperature}
         humidity={data.climate.humidity}/>
        <Blinds
         key={data.blinds}
         state={data.blinds}/>
        <Energy
        key={data.energyConsumption.electricity}
        electricity={data.energyConsumption.electricity}
        water={data.energyConsumption.water}/>
        
	</main>
    )
}