import React from 'react'
import "./courses.css"

export const CardFooter = (props) => {
    return (
        <>
            <div className="card courses-bottom-card text-center mt-5">
                <img src={props.image} alt={props.alt} className="p-1" />
                <div className="card-body">
                    <p className="card-title text-white text-title fs-16">{props.title}</p>
                    <p className="card-text text-white fs-12 m-0">{props.description}</p>
                    <p className="card-text text-white fs-12">{props.secdescription}</p>
                    <button className="card-btn fs-14">{props.button}</button>
                </div>
            </div>
        </>
    )
}
