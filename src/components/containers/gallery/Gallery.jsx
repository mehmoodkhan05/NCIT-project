import React from "react";
import "./gallery.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const Gallery = () => {
    return (
        <>
            <section className="gallery-section" id="gallery">
                <div className="container">
                    <h1 className="text-center">Events Gallery</h1>
                    <p className="text-center fs-18">
                        Explore the success stories and achievements of our graduates and
                        the activities organized by NCIT.
                    </p>
                    <div className="gallery-image text-center pt-5">
                        <img src="src/assets/gallery-image.png" alt="" className="w-100" />
                    </div>
                    <div className="icons text-center pt-4">
                        <button className="left_arrow-icon me-5">
                            <FaArrowAltCircleLeft />
                        </button>
                        <button className="right_arrow-icon ms-5">
                            <FaArrowAltCircleRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
