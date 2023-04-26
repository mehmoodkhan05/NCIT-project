import React from "react";
import "./footer.css";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { footer_logo, footer_image } from "./index"

export const Footer = () => {
    return (
        <>
            <footer className="main-footer mt-5">
                <div className="container footer-container">
                    <div className="row">
                        <div className="col-lg-4 col-md-7 col-12">
                            <div className="footer-logo-image">
                                <a href="#">
                                    <img
                                        src={footer_logo}
                                        alt="logo"
                                        className="footer-logo"
                                    />
                                </a>
                            </div>
                            <div className="footer-description pt-4">
                                <span>
                                    National College of Information Technology aims to equip its
                                    graduates with the skills necessary to succeed in today's
                                    competitive job market. With a focus on practical, hands-on
                                    learning, the NCIT is committed to contribute to the economy
                                    and society.
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-5 footer_quick-links col-6 mt-5 mt-md-0 ps-md-5">
                            <h5 className="text-uppercase">Quick Links</h5>
                            <ul className="p-0 pt-2">
                                <li>
                                    <a href="#courses">Courses</a>
                                </li>
                                <li>
                                    <a href="#about">About Us</a>
                                </li>
                                <li>
                                    <a href="#principal">Principal</a>
                                </li>
                                <li>
                                    <a href="#gallery">Gallery</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer_contact-info mt-md-5 mt-lg-0 col-6 mt-5 mt-md-0 ps-lg-4 ps-0">
                            <h5 className="text-uppercase">Contact Info</h5>
                            <p className="pt-3">
                                <a href="https://goo.gl/maps/iWffzeYKKY5ZHiEL9" target="_blank">
                                    Sharif Abad, Mingora Swat KP, Pakistan
                                </a>
                            </p>
                            <p className="text-break">
                                <a href="mailto:ncit.edu.pk@gmail.com">
                                    ncit.edu.pk@gmail.com
                                </a>
                            </p>
                            <p>
                                <a
                                    href="tel:+92 340 925 1400"
                                >
                                    +92 340 925 1400
                                </a>
                            </p>
                            <div className="footer-icons">
                                <a href="https://www.facebook.com/NCIT.TE" className="icon" target="_blank">
                                    <BsFacebook />
                                </a>
                                <a href="https://wa.me/+923409251400" className="ms-2 ms-sm-3 icon" target="_blank">
                                    <BsWhatsapp />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 text-end mt-md-5 mt-lg-0 col-12 mt-5 mt-md-0">
                            <div className="footer-image">
                                <img src={footer_image} alt="image" className="w-100" />
                            </div>
                            <div className="text-center">
                                <a href="#registration">
                                    <button className="footer-btn mt-4 mt-md-3 text-uppercase">
                                        Register Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom-span text-center">
                        <span>
                            Copyright to National College of Information Technology 2023. All
                            Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};
