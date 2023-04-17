import React from "react";
import "./home.css";
import {
    slider1,
    slider2,
    slider3,
    header_image1,
    header_image2,
} from "./index";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const Home = () => {
    return (
        <>
            <section className="hero-section">
                <div className="container-fluid">
                    <div className="row">
                        <div
                            id="carouselExampleFade"
                            className="carousel slide carousel-fade p-0"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src={slider1}
                                        className="d-block w-100 slider-images img-responsive"
                                        alt="slider2"
                                    />
                                    <div className="carousel-caption d-block">
                                        <h1>
                                            National College of Information Technology & Technical
                                            Education
                                        </h1>
                                        <p className="mt-4">
                                            We offer various IT courses and Technical Education
                                            Programs since 2018. NCIT is Affiliated with:
                                        </p>
                                        <ul className="fw-bold">
                                            <li>
                                                KP Board of Technical & Commerce Education,Peshhawar
                                            </li>
                                            <li>Skill Development Council Peshawar, Pakistan</li>
                                        </ul>
                                        <div className="header-images mt-4">
                                            <img src={header_image1} alt="" className="ms-sm-5" />
                                            <img src={header_image2} alt="" className="ms-sm-5" />
                                        </div>
                                        <button className="text-uppercase carousel-btn">
                                            Start a Course
                                        </button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={slider2}
                                        className="d-block w-100 slider-images img-responsive"
                                        alt="slider2"
                                    />
                                    <div className="carousel-caption d-block">
                                        <h1>
                                            National College of Information Technology & Technical
                                            Education
                                        </h1>
                                        <p className="mt-4">
                                            We offer various IT courses and Technical Education
                                            Programs since 2018. NCIT is Affiliated with:
                                        </p>
                                        <ul className="fw-bold">
                                            <li>
                                                KP Board of Technical & Commerce Education,Peshhawar
                                            </li>
                                            <li>Skill Development Council Peshawar, Pakistan</li>
                                        </ul>
                                        <div className="header-images mt-4">
                                            <img src={header_image1} alt="" className="ms-sm-5" />
                                            <img src={header_image2} alt="" className="ms-sm-5" />
                                        </div>
                                        <button className="text-uppercase carousel-btn">
                                            Start a Course
                                        </button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={slider3}
                                        className="d-block w-100 slider-images img-responsive"
                                        alt="slider3"
                                    />
                                    <div className="carousel-caption d-block">
                                        <h1>
                                            National College of Information Technology & Technical
                                            Education
                                        </h1>
                                        <p className="mt-4">
                                            We offer various IT courses and Technical Education
                                            Programs since 2018. NCIT is Affiliated with:
                                        </p>
                                        <ul className="fw-bold">
                                            <li>
                                                KP Board of Technical & Commerce Education,Peshhawar
                                            </li>
                                            <li>Skill Development Council Peshawar, Pakistan</li>
                                        </ul>
                                        <div className="header-images mt-4">
                                            <img src={header_image1} alt="" className="ms-sm-5" />
                                            <img src={header_image2} alt="" className="ms-sm-5" />
                                        </div>
                                        <button className="text-uppercase carousel-btn">
                                            Start a Course
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="icons">
                                <button
                                    className="carousel-control-prev left_arrow-icon"
                                    type="button"
                                    data-bs-target="#carouselExampleFade"
                                    data-bs-slide="prev"
                                >
                                    <FaArrowAltCircleLeft className="bg-color" />
                                </button>
                                <button
                                    className="carousel-control-next right_arrow-icon"
                                    type="button"
                                    data-bs-target="#carouselExampleFade"
                                    data-bs-slide="next"
                                >
                                    <FaArrowAltCircleRight className="bg-color" />
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
