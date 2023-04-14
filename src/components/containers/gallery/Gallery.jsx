import React from "react";
import "./gallery.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { gallery_image1, gallery_image2, gallery_image3 } from "./index";

export const Gallery = () => {
    return (
        <>
            <section className="gallery-section" id="gallery">
                <div className="container">
                    <div className="gallery-header">
                        <h1 className="text-center">Events Gallery</h1>
                        <p className="text-center fs-18">
                            Explore the success stories and achievements of our graduates and
                            the activities organized by NCIT.
                        </p>
                    </div>
                    <div
                        id="carouselExampleControls"
                        className="carousel slide mt-5"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={gallery_image1} className="d-block w-100 gallery_image" alt="gallery" />
                            </div>
                            <div className="carousel-item">
                                <img src={gallery_image2} className="d-block w-100 gallery_image" alt="gallery" />
                            </div>
                            <div className="carousel-item">
                                <img src={gallery_image3} className="d-block w-100 gallery_image" alt="gallery" />
                            </div>
                        </div>
                    </div>
                    <div className="icons text-center pt-4">
                        <button
                            className="left_arrow-icon me-5"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        >
                            <FaArrowAltCircleLeft />
                        </button>
                        <button
                            className="right_arrow-icon ms-5"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        >
                            <FaArrowAltCircleRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
