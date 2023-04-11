import React from "react";
import "./registration.css";

export const Registration = () => {
    return (
        <>
            <section className="registration-section" id="registration">
                <div className="container">
                    <h1 className="text-center text-white">Registration Form</h1>
                    <form className="registration-form">
                        <div className="row">
                            <div className="col-md-6 pt-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        SELECT DIPLOMA / COURSE
                                    </label>
                                    <select name="" id="" className="form-select">
                                        <option value="">
                                            Diploma in Information Technology (DIT)
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6 pt-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        SELECT YOUR QUALIFICATION
                                    </label>
                                    <select name="" id="" className="form-select">
                                        <option value="">Secondary School Certificate (SSC)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6 pt-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Student Full Name
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6 pt-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Date of Birth *
                                    </label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6 pt-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Father Name
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6 pt-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        CNIC / Form-B Number
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6 pt-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Mobile Number
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6 pt-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Address / Domicile
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="text-center">
                        <button className="registration-btn">Submit</button>
                    </div>
                </div>
            </section>
        </>
    );
};
