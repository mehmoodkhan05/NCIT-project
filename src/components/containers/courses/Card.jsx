import React from 'react'
import "./courses.css";

export const Card = (props) => {
    return (
        <>
            <div className="card courses-card mx-auto text-center">
                <img src={props.image} alt={props.title} className="p-1 img-fluid courses-card-image" />
                <div className="card-body">
                    <p className="card-title text-white fs-24 pt-3">{props.title}</p>
                    <p className="card-text text-white fs-12 pt-3">{props.description}</p>
                    <button className="card-btn mt-5">{props.button}</button>
                </div>
            </div>
        </>
    )
}