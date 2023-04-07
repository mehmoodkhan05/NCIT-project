import React from "react";
import "./navbar.css";
import { BsBellFill } from "react-icons/bs";

export const Navbar = (props) => {
  return (
    <>
        <header className="main-header">
            <nav class="navbar navbar-expand-lg bg-white">
                <div class="container">
                        <a class="navbar-brand" href="">
                            <img src="src/assets/header-logo.svg" alt="logo" className="header-logo" />
                        </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-uppercase" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item me-4">
                                <a class="nav-link" aria-current="page" href="#">
                                    {props.courses}
                                </a>
                            </li>
                            <li class="nav-item me-4">
                                <a class="nav-link" href="#">
                                    {props.about}
                                </a>
                            </li>
                            <li class="nav-item me-4">
                                <a class="nav-link" href="#">
                                    {props.gallery}
                                </a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link" href="#">
                                    {props.contact}
                                </a>
                            </li>
                        </ul>
                        <button className="header-bell-icon">
                            <BsBellFill className="me-4 me-lg-5" />
                        </button>
                        <button className="text-uppercase me-xxl-5 me-lg-0 header-btn">Register Now</button>
                    </div>
                </div>
            </nav>
        </header>
    </>
  );
};
