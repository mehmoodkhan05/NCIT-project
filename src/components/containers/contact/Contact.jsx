import React from "react";
import "./contact.css";
import { MdLocationOn, MdPermPhoneMsg } from "react-icons/md";
import { HiEnvelope } from "react-icons/hi2";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
    return (
        <>
            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1>Contact Information</h1>
                            <div className="pt-3">
                                <MdLocationOn className="icons" />
                                <a href="https://goo.gl/maps/iWffzeYKKY5ZHiEL9" target="_blank">
                                    <span className="ms-3">
                                        Sharif Abad, Hajibaba Road Mingora Swat KP, Pakistan
                                    </span>
                                </a>
                            </div>

                            <div className="pt-3">
                                <HiEnvelope className="icons" />
                                <a href="mailto:ncit.edu.pk@gmail.com">
                                    <span className="ms-3">ncit.edu.pk@gmail.com</span>
                                </a>
                            </div>

                            <div className="pt-3">
                                <MdPermPhoneMsg className="icons" />
                                <a href="tel:+923409251400">
                                    <span className="ms-3">+92 340 925 1400</span>
                                </a>
                            </div>

                            <div className="pt-3">
                                <RiWhatsappFill className="icons" />
                                <a href="https://wa.me/+923409251400" target="_blank">
                                    <span className="ms-3">+92 340 925 1400</span>
                                </a>
                            </div>

                            <div className="contact__bottom pt-3 d-flex">
                                <p className="contact-desc m-0 pt-1">Socialize with us:</p>
                                <a href="#" className="social-icon ms-3">
                                    <BsFacebook />
                                </a>
                                <a href="#" className="ms-2 ms-sm-3 social-icon">
                                    <BsTwitter />
                                </a>
                                <a href="#" className="ms-2 ms-sm-3 social-icon">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="mt-5 mt-lg-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.5308651337327!2d72.36728621547147!3d34.767408787149755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc23e504623171%3A0x6f0101c075d65a1d!2sNational%20College%20of%20IT%20%26%20Technical%20Education!5e0!3m2!1sen!2s!4v1681212044127!5m2!1sen!2s"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
