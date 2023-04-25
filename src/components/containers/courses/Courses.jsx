import React, { useState } from "react";
import "./courses.css";
import { Card } from "./Card";
import { CardFooter } from "./CardFooter";
import { card_headImage1, card_headImage2, office, graphic, web, development, typing } from "./index"
// import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";

export const Courses = () => {

  const [selectedOption, setSelectedOption] = useState('');

  function handleButtonClick() {
    // Use the selectedOption value here
    console.log(selectedOption);
  }

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

          <div className="row justify-content-center owl-carousel-row">
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

              <div className="item">
                <div className="col-xxl-2 col-lg-3 col-md-4">
                  <CardFooter
                    image={office}
                    alt=""
                    title="Mobile App Development"
                    description="Duration: 6 months"
                    button="Enroll Now"
                  />
                </div>
              </div>

              <div className="item">
                <div className="col-xxl-2 col-lg-3 col-md-4">
                  <CardFooter
                    image={graphic}
                    alt=""
                    title="Video Editing"
                    description="Duration: 3 months"
                    button="Enroll Now"
                  />
                </div>
              </div>

              <div className="item">
                <div className="col-xxl-2 col-lg-3 col-md-4">
                  <CardFooter
                    image={office}
                    alt=""
                    title="Electrician"
                    description="Duration: 9 months"
                    button="Enroll Now"
                  />
                </div>
              </div>

              <div className="item">
                <div className="col-xxl-2 col-lg-3 col-md-4">
                  <CardFooter
                    image={typing}
                    alt=""
                    title="English Language"
                    description="Duration: 4 months"
                    button="Enroll Now"
                  />
                </div>
              </div>
            </div>

            <div className="owl-nav text-center mt-3 mt-lg-5 position-relative">
              <button type="button" id="prevBtn" role="presentation" className="owl-prev owl-btns left_arrow-btn">
                <span aria-label="Previous">
                  <svg xmlns="http://www.w3.org/2000/svg" color="white" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2S2 6.48 2 12zm10-2.79V11h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v1.79c0 .45-.54.67-.85.35l-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79a.5.5 0 0 1 .85.36z" /></svg>
                </span>
              </button>
              <button type="button" id="nextBtn" role="presentation" className="owl-next owl-btns right_arrow-btn ms-5">
                <span aria-label="Next">
                  <svg xmlns="http://www.w3.org/2000/svg" color="white" width="30" height="30" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="currentColor" d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2S2 6.48 2 12zm10-2.79V11h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v1.79c0 .45-.54.67-.85.35l-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79a.5.5 0 0 1 .85.36z" /></g></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
