import React from "react";
import "./courses.css";
import { Card } from "./Card";
import { CardFooter } from "./CardFooter";
import { card_headImage1, card_headImage2, office, graphic, web, development, typing } from "./index"

export const Courses = () => {

  return (
    <>
      <section className="course-section" id="courses">
        <div className="container">
          <div className="row justify-content-center top-cards">
            <div className="col-lg-auto col-md-6 col-12">
              <Card
                image={card_headImage1}
                alt="DIT image"
                title="Diploma in Information Technology (DIT)"
                description="Duration: 1 year"
                button="Enroll Now"
              />
            </div>

            <div className="col-lg-auto col-md-6 col-12 mt-3 mt-md-0">
              <Card
                image={card_headImage2}
                alt="CIT image"
                title="Communication Information Technology (CIT)"
                description="Duration: 6 months"
                button="Enroll Now"
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="col-xxl-2 col-lg-3 col-md-4">
                  <CardFooter
                    image={office}
                    alt="MS Office"
                    title="Office Automation"
                    description="Duration: 3 months"
                    button="Enroll Now"
                  />
                </div>
              </div>

              <div className="item">
                <div className="col-xxl-2 col-lg-3 col-md-4">
                  <CardFooter
                    image={graphic}
                    alt="graphics design"
                    title="Graphic Design"
                    description="Duration: 5 months"
                    button="Enroll Now"
                  />
                </div>
              </div>

              <div className="item">
                <div className="col-xxl-2 col-lg-3 col-md-4">
                  <CardFooter
                    image={web}
                    alt="web design"
                    title="Web Design"
                    description="Duration: 6 months"
                    button="Enroll Now"
                  />
                </div>
              </div>

              <div className="item">
                <div className="col-xxl-2 col-lg-3 col-md-4">
                  <CardFooter
                    image={development}
                    alt="web development"
                    title="Web Development"
                    description="Duration: 3 months"
                    button="Enroll Now"
                  />
                </div>
              </div>

              <div className="item">
                <div className="col-xxl-2 col-lg-3 col-md-4">
                  <CardFooter
                    image={typing}
                    alt="typing course"
                    title="Typing Course"
                    description="(English & Urdu)"
                    secdescription="Duration: 2 months"
                    button="Enroll Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
