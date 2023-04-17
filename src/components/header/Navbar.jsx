import React from "react";
import "./navbar.css";
import { BsBellFill } from "react-icons/bs";
import logo from "/src/assets/header-logo.svg"

export const Navbar = (props) => {
  return (
    <>
        <header className="main-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo" className="header-logo" />
                        </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-uppercase" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <a className="nav-link" aria-current="page" href="#courses">
                                    {props.courses}
                                </a>
                            </li>
                            <li className="nav-item me-4" id="">
                                <a className="nav-link" href="#about">
                                    {props.about}
                                </a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#gallery">
                                    {props.gallery}
                                </a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="#contact">
                                    {props.contact}
                                </a>
                            </li>
                        </ul>
                        <button className="header-bell-icon">
                            <BsBellFill className="me-4 me-lg-5" />
                        </button>
                        <a href="#registration" className="text-uppercase header-btn text-center">Register Now</a>
                    </div>
                </div>
            </nav>
        </header>
    </>
  );
};
