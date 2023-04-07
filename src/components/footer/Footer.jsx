import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
        <>
            <footer className="main-footer mt-5">
                <div className="container footer-container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-logo">
                                <a href="">
                                    <img src="src/assets/footer-logo.svg" alt="" />
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

                        <div className="col-lg-2 footer_quick-links">
                            <h4 className="text-uppercase">Quick Links</h4>
                            <ul className="p-0 pt-2">
                                <li>
                                    <a href="#">Courses</a>
                                </li>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Principal</a>
                                </li>
                                <li>
                                    <a href="#">Gallery</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 footer_contact-info">
                            <h4 className="text-uppercase">Contact Info</h4>
                            <p className="pt-2">
                                <a href="#">Sharif Abad, Mingora Swat KP,Pakistan</a>
                            </p>
                            <p>
                                <a href="#">admissions@ncit.edu.pk</a>
                            </p>
                            <p>
                                <a href="#">+92 334 09251400</a>
                            </p>
                            <div className="footer-icons">
                                <a href="#">icon</a>
                                <a href="#" className="ms-3">icon</a>
                                <a href="#" className="ms-3">icon</a>
                            </div>
                        </div>

                        <div className="col-lg-4 text-center">
                            <div className="footer-image">
                                <img src="src/assets/footer-image.png" alt="" />
                            </div>
                            <button className="footer-btn mt-3 text-uppercase">Register Now</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
