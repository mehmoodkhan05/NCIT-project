import React, { useState, useRef } from "react";
import "./registration.css";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";

export const Registration = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    function handlePhone(event) {
        setPhoneNumber(event.target.value);
    }

    const [cnic, setCNIC] = useState("");
    function handleCnic(event) {
        setCNIC(event.target.value);
    }

    const form = useRef();
    const diplomaSelect = useRef();
    const qualificationSelect = useRef();
    const domicileSelect = useRef();

    const alert = document.getElementById("success-message");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_plus8eq",
                "template_1yyrli5",
                form.current,
                "CQuVcUs_gCDlgiDdS"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("email send");
                    document.getElementById("form").reset();
                    document.getElementById("phone").value = "";
                    document.getElementById("cnic").value = "";

                    alert.classList.add("show");
                    setTimeout(function () {
                        alert.classList.remove("show");
                    }, 5000);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <section className="registration-section" id="registration">
                <div className="container">
                    <h1 className="text-center text-white">Registration Form</h1>
                    <form
                        id="form"
                        className="registration-form w-75 mx-auto mt-5 needs-validation"
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <div className="row">
                            <div className="col-md-6 pt-3 pt-lg-5">
                                <div className="mb-3">
                                    <label htmlFor="diplomaSelect" className="form-label">
                                        SELECT DIPLOMA / COURSE
                                    </label>
                                    <select
                                        name="course"
                                        id="diplomaSelect"
                                        className="form-select"
                                        required
                                    >
                                        <option value="" hidden>
                                            Select Diploma / Course
                                        </option>
                                        <optgroup label="Diploma">
                                            <option value="Diploma in Information Technology (DIT)">
                                                Diploma of Information Technology (DIT)
                                            </option>
                                            <option value="Certificate In Information Technology (CIT)">
                                                Certificate In Information Technology (CIT)
                                            </option>
                                        </optgroup>
                                        <optgroup label="Short Courses">
                                            <option value="Office Automation">
                                                Office Automation
                                            </option>
                                            <option value="Graphic Design">Graphic Design</option>
                                            <option value="Web Design">Web Design</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Mobile App Development">
                                                Mobile App Development
                                            </option>
                                            <option value="Typing Course">
                                                English / Urdu Typing
                                            </option>
                                            <option value="Video Editing">Video Editing</option>
                                            <option value="Electrician">Electrician</option>
                                            <option value="English Language">English Language</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6 pt-3 pt-lg-5">
                                <div className="mb-3">
                                    <label htmlFor="qualificationSelect" className="form-label">
                                        SELECT YOUR QUALIFICATION
                                    </label>
                                    <select
                                        name="qualification"
                                        id="qualificationSelect"
                                        className="form-select"
                                        required
                                    >
                                        <option value="" hidden>
                                            Select Qualification
                                        </option>
                                        <option value="SSC">
                                            Secondary School Certificate (SSC)
                                        </option>
                                        <option value="F.A or FSc">
                                            Intermediate (F.A or FSc)
                                        </option>
                                        <option value="B.A or BSc">Bachelor (B.A or BSc)</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6 pt-3 pt-lg-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Student Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="user_name"
                                        placeholder="Enter Your Name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-3 pt-3 pt-lg-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Date of Birth *
                                    </label>
                                    <input
                                        type="date"
                                        name="dob"
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-3 pt-3 pt-lg-5">
                                <div className="mb-3">
                                    <label htmlFor="domicileSelect" className="form-label">
                                        Domicile
                                    </label>
                                    <select
                                        name="domicile"
                                        id="domicileSelect"
                                        className="form-select"
                                        required
                                    >
                                        <option value="" hidden>
                                            Select District
                                        </option>
                                        <option value="Swat">Swat</option>
                                        <option value="Buner">Buner</option>
                                        <option value="Shangla">Shangla</option>
                                        <option value="Dir Lower">Dir Lower</option>
                                        <option value="Dir Upper">Dir Upper</option>
                                        <option value="Malakand">Malakand</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6 pt-3 pt-lg-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Father Name
                                    </label>
                                    <input
                                        type="text"
                                        name="user_fname"
                                        className="form-control"
                                        placeholder="Enter Your Father Name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6 pt-3 pt-lg-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        CNIC / Form-B Number
                                    </label>
                                    <InputMask
                                        className="form-control"
                                        id="cnic"
                                        name="user_cnic"
                                        mask="99999-9999999-9"
                                        value={cnic}
                                        onChange={handleCnic}
                                        placeholder="XXXXX-XXXXXXX-X"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6 pt-3 pt-lg-5">
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">
                                        Mobile Number
                                    </label>
                                    <InputMask
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        mask="+\92 399 9999999"
                                        value={phoneNumber}
                                        onChange={handlePhone}
                                        placeholder="+92 3__ ___ ____"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6 pt-3 pt-lg-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        name="user_address"
                                        className="form-control"
                                        placeholder="Enter Your Full Address"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className="alert alert-success alert-dismissible fade"
                            role="alert"
                            id="success-message"
                        >
                            <strong>Thank you!</strong> for registering with us. We will get
                            back to you shortly.
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="registration-btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};
