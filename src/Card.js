import React from 'react'

const Card = ({CH2O,CO2,Co,Humidity,NO2,O3,PM_1_0,PM_2_5,PM_10,Temperatue,VOC,hit_time}) => {
  return (
    <div className="cardContainer">
        <p><span>Temperature</span><br/>{Temperatue}</p>
        <p><span>Humidity</span><br/>{Humidity}</p>
        <p><span>CH<sub>2</sub>O</span><br/>{CH2O} </p>
        <p><span>CO<sub>2</sub><br/></span>{CO2}</p>
        <p><span>CO</span><br/>{Co}</p>
        <p><span>NO<sub>2</sub><br/></span>{NO2}</p>
        <p><span>O<sub>3</sub></span><br/>{O3}</p>
  
    </div>
  )
}

export default Card