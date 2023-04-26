import React from 'react'
import "./courses.css";

export const Card = (props) => {
    return (
        <>
            <div className="card courses-card mx-auto text-center">
                <img src={props.image} alt={props.alt} className="p-1 img-fluid courses-card-image" />
                <div className="card-body">
                    <p className="card-title text-white text-title fs-22">{props.title}</p>
                    <p className="card-text text-white fs-12">{props.description}</p>
                    <a href="#registration">
                        <button className="card-btn mt-3">{props.button}</button>
                    </a>
                </div>
            </div>
        </>
    )
}