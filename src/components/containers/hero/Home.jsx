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
                            data-bs-pause="false"
                            data-bs-touch="true"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="3000">
                                    <img
                                        src={slider1}
                                        className="d-block slider-images slider1"
                                        alt="slider1"
                                    />
                                    <div className="carousel-caption d-block">
                                        <h1 className="text-white">
                                            National College of Information Technology & Technical
                                            Education
                                        </h1>
                                        <p className="mt-4">
                                            We offer various IT courses and Technical Education
                                            Programs since 2018. NCIT is Affiliated with:
                                        </p>
                                        <ul className="fw-bold">
                                            <li>
                                                KP Board of Technical & Commerce Education, Peshawar
                                            </li>
                                            <li>Skill Development Council Peshawar, Pakistan</li>
                                        </ul>
                                        <div className="header-images mt-4">
                                            <img src={header_image1} alt="" className="" />
                                            <img src={header_image2} alt="" className="ms-5" />
                                        </div>
                                        <a href="#courses">
                                            <button className="text-uppercase carousel-btn">
                                                Start a Course
                                            </button>
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item" data-bs-interval="3000">
                                    <img
                                        src={slider2}
                                        className="d-block slider-images"
                                        alt="slider2"
                                    />
                                    <div className="carousel-caption d-block">
                                        <h1 className="text-white">
                                            National College of Information Technology & Technical
                                            Education
                                        </h1>
                                        <p className="mt-4">
                                            We offer various IT courses and Technical Education
                                            Programs since 2018. NCIT is Affiliated with:
                                        </p>
                                        <ul className="fw-bold">
                                            <li>
                                                KP Board of Technical & Commerce Education, Peshawar
                                            </li>
                                            <li>Skill Development Council Peshawar, Pakistan</li>
                                        </ul>
                                        <div className="header-images mt-4">
                                            <img src={header_image1} alt="" className="" />
                                            <img src={header_image2} alt="" className="ms-5" />
                                        </div>
                                        <a href="#courses">
                                            <button className="text-uppercase carousel-btn">
                                                Start a Course
                                            </button>
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item" data-bs-interval="3000">
                                    <img
                                        src={slider3}
                                        className="d-block slider-images"
                                        alt="slider3"
                                    />
                                    <div className="carousel-caption d-block">
                                        <h1 className="text-white">
                                            National College of Information Technology & Technical
                                            Education
                                        </h1>
                                        <p className="mt-4">
                                            We offer various IT courses and Technical Education
                                            Programs since 2018. NCIT is Affiliated with:
                                        </p>
                                        <ul className="fw-bold">
                                            <li>
                                                KP Board of Technical & Commerce Education, Peshawar
                                            </li>
                                            <li>Skill Development Council Peshawar, Pakistan</li>
                                        </ul>
                                        <div className="header-images mt-4">
                                            <img src={header_image1} alt="" className="" />
                                            <img src={header_image2} alt="" className="ms-5" />
                                        </div>
                                        <a href="#courses">
                                            <button className="text-uppercase carousel-btn">
                                                Start a Course
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-lg-none d-block">
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
