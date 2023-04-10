import React from 'react'
import "./home.css"

export const Home = () => {
    return (
        <>
            <section className="hero-section" id="home">
                <div className="container-fluid">
                    <div className="row">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade p-0" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                                    <img src="src/assets/slider-images/slider-1.jpg" class="d-block w-100 slider-images" alt="slider2" />
                                    <div class="carousel-caption d-block">
                                        <h1>National College of Information Technology & Technical Education</h1>
                                        <p className="mt-4">
                                            We offer various IT courses and Technical Education Programs since 2018. NCIT is  Affiliated with:
                                        </p>
                                        <ul className="fw-bold">
                                            <li>KP Board of Technical & Commerce Education,Peshhawar</li>
                                            <li>Skill Development Council Peshawar, Pakistan</li>
                                        </ul>
                                        <div className="header-images mt-4">
                                            <img src="src/assets/header-image-1.png" alt="" className="ms-sm-5" />
                                            <img src="src/assets/header-image-2.png" alt="" className="ms-sm-5" />
                                        </div>
                                        <button className="text-uppercase carousel-btn">Start a Course</button>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="src/assets/slider-images/slider-2.jpg" class="d-block w-100 slider-images" alt="slider2" />
                                    <div class="carousel-caption d-block">
                                        <h1>National College of Information Technology & Technical Education</h1>
                                        <p className="mt-4">
                                            We offer various IT courses and Technical Education Programs since 2018. NCIT is  Affiliated with:
                                        </p>
                                        <ul className="fw-bold">
                                            <li>KP Board of Technical & Commerce Education,Peshhawar</li>
                                            <li>Skill Development Council Peshawar, Pakistan</li>
                                        </ul>
                                        <div className="header-images mt-4">
                                            <img src="src/assets/header-image-1.png" alt="" className="ms-sm-5" />
                                            <img src="src/assets/header-image-2.png" alt="" className="ms-sm-5" />
                                        </div>
                                        <button className="text-uppercase carousel-btn">Start a Course</button>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="src/assets/slider-images/slider-3.jpg" class="d-block w-100 slider-images" alt="slider3" />
                                    <div class="carousel-caption d-block">
                                        <h1>National College of Information Technology & Technical Education</h1>
                                        <p className="mt-4">
                                            We offer various IT courses and Technical Education Programs since 2018. NCIT is  Affiliated with:
                                        </p>
                                        <ul className="fw-bold">
                                            <li>KP Board of Technical & Commerce Education,Peshhawar</li>
                                            <li>Skill Development Council Peshawar, Pakistan</li>
                                        </ul>
                                        <div className="header-images mt-4">
                                            <img src="src/assets/header-image-1.png" alt="" className="ms-sm-5" />
                                            <img src="src/assets/header-image-2.png" alt="" className="ms-sm-5" />
                                        </div>
                                        <button className="text-uppercase carousel-btn">Start a Course</button>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon text-bg-danger" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon text-bg-danger" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
