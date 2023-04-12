import React from "react";
import "./courses.css";
import { Card } from "./Card";
import { CardFooter } from "./CardFooter";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

export const Courses = () => {

  return (
    <>
      <section className="course-section" id="courses">
        <div className="container">
          <div className="row justify-content-center top-cards">
            <div className="col-md-auto">
              <Card
                image="src/assets/card-images/card-headImage1.png"
                alt="DIT image"
                title="Diploma in Information Technology (DIT)"
                description="Duration: 1 year"
                button="Enroll Now"
              />
            </div>

            <div className="col-md-auto">
              <Card
                image="src/assets/card-images/card-headImage2.png"
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
                    image="src/assets/card-images/card-msOffice.png"
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
                    image="src/assets/card-images/card-graphicDesign.png"
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
                    image="src/assets/card-images/card-webDesign.png"
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
                    image="src/assets/card-images/card-development.png"
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
                    image="src/assets/card-images/card-typingCourse.png"
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
