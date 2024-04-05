import React from "react";

export default function Card(props) {
    console.log(props)
    return(
            <div className="destination-card">
                <div className="destination-card--column-1">
                    <img src={`${props.imageUrl}`} width="300" className="destination-card--image"/>
                </div>
                <div className="destination-card--column-2">
                    <div className="destination-card--location">
                        <img src="../images/location.png"/>
                        <p>{props.location}</p>
                        <a href={`${props.googleMapsUrl}`}>View in Google Maps</a>
                    </div>
                    <div className="destination-card--title">
                        <h2>{props.title}</h2>
                    </div>
                    <h3><span>{props.startDate}</span> - <span>{props.endDate}</span></h3>
                    <p className="destination-description">{props.description}</p>
                </div>
            </div>
    )
}