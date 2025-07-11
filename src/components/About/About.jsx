import React from "react";
import "./About.css";
import istockphoto from "../images/istockphoto.jpg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faMedkit,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
export const AboutHero = () => {
  return (
    <div className="main">
      <section
        className="top"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-duration="1300"
      >
        <div className="overlay"></div>
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
        </div>
      </section>
    </div>
  );
};

export const AboutWhoWeAre = () => {
  return (
    <div className="container col-xxl-8 px-4 py-3" width="100vw">
      <div className="row flex-lg-row-reverse align-items-center g-5 pt-5 pb-3">
        <div
          className="col-12 col-lg-6 order-lg-2"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-once="false"
        >
          <img
            src={istockphoto}
            className="d-block mx-lg-auto img-fluid whoweare"
            alt="Who We Are"
            loading="lazy"
          />
        </div>
        <div
          className="col-12 col-lg-6 order-lg-1 text-center"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-once="false"
        >
          <h1 className="display-5 lh-1 mb-3 text-primary">About Us</h1>
          <h1 className="fs-4 fw-bold mb-3" style={{ color: "#6aa53b" }}>
            Our Pride: Our Pride Is Quality Medical Billing, Dental Billing,
            Prior Authorization, RCM Services, Scribing Services, Credentialing
            Services
          </h1>
          <p className="lead fs-6 text-primary">
            At AMCK Knowledge Solutions, we provide end-to-end Revenue Cycle
            Management (RCM) solutions for the healthcare industry. Our
            comprehensive services include medical and dental billing, coding,
            credentialing, patient helpdesk, scribing and more. With a deep
            understanding of healthcare intricacies, our experienced team
            maximizes revenue and streamlines operations. We cater to practices
            of all sizes, offering transparent, accurate, and timely support.
            AMCK Knowledge Solutions is a trusted partner to many organizations
            across the nation. Get in touch with us today to learn more.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <NavLink to="/about" className="mx-auto">
              <button type="button" className="btn btn-outline-primary px-4">
                Know More
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutWhyChooseUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <div className="row">
          <div
            className="col-md-8 offset-md-2"
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-once="true"
            data-aos-duration="2000"
          >
            <h2 className="mt-5 text-center">Why Choose Us</h2>
            <p className="mb-5 text-center">
              At AMCK Knowledge Solutions, we offer tailored solutions to
              streamline your revenue cycle management. Our team of experts
              ensures meticulous coding, rapid claims processing, and compliance
              adherence. Experience enhanced cash flow and reduced
              administrative burden with our specialized medical billing
              services.
            </p>
          </div>
        </div>

        <div className="row">
          <div
            className="col-sm-6 col-lg-4"
            data-aos="zoom-in-right"
            data-aos-once="false"
            data-aos-duration="1200"
          >
            <div className="box">
              <span>01</span>
              <h4>
                <a href="#">Expertise</a>
              </h4>
              <p>
                With over 15 years in the industry, we've honed our skills
                and gained comprehensive knowledge of the medical billing and
                coding field
              </p>
              <img src={istockphoto} alt="" />
            </div>
          </div>

          <div
            className="col-sm-6 col-lg-4"
            data-aos="zoom-in-left"
            data-aos-once="false"
            data-aos-duration="1200"
          >
            <div className="box">
              <span>02</span>
              <h4>
                <a href="#">Efficiency</a>
              </h4>
              <p>
                Our streamlined processes and advanced technologies ensure
                efficient and accurate billing.
              </p>
              <img src={istockphoto} alt="" />
            </div>
          </div>

          <div
            className="col-sm-6 col-lg-4"
            data-aos="zoom-in-right"
            data-aos-once="false"
            data-aos-duration="1200"
          >
            <div className="box">
              <span>03</span>
              <h4>
                <a href="#">Dedicated Support</a>
              </h4>
              <p>
                Our responsive and knowledgeable support team is available to
                assist you with any questions or concerns.
              </p>
              <img src={istockphoto} alt="" />
            </div>
          </div>

          <div
            className="col-sm-6 col-lg-4"
            data-aos="zoom-in-left"
            data-aos-once="false"
            data-aos-duration="1200"
          >
            <div className="box">
              <span>04</span>
              <h4>
                <a href="#">Proven Success</a>
              </h4>
              <p>
                Our track record speaks for itself. We've helped numerous
                healthcare providers enhance their revenue and reduce
                administrative burdens.
              </p>
              <img src={istockphoto} alt="" />
            </div>
          </div>

          <div
            className="col-sm-6 col-lg-4"
            data-aos="zoom-in-right"
            data-aos-once="false"
            data-aos-duration="1200"
          >
            <div className="box">
              <span>05</span>
              <h4>
                <a href="#">Data Security</a>
              </h4>
              <p>
                We take the security of your patient's data very seriously. Our
                systems and processes are fully compliant with HIPAA
                regulations. Your sensitive information is safe with us.
              </p>
              <img src={istockphoto} alt="" />
            </div>
          </div>

          <div
            className="col-sm-6 col-lg-4"
            data-aos="zoom-in-left"
            data-aos-once="false"
            data-aos-duration="1200"
          >
            <div className="box">
              <span>06</span>
              <h4>
                <a href="#">Ongoing Education</a>
              </h4>
              <p>
                In the dynamic healthcare industry, staying updated is crucial.
                We stay abreast of the latest regulations, coding changes, and
                industry best practices to keep your practice compliant and
                efficient.
              </p>
              <img src={istockphoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export function AboutAdvantages() {
  return (
    <div className="advantagemain py-5">
      <div className="container advantagesection">
        <h2
          className="display-4 text-white"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-once="false"
        >
          Our Advantages
        </h2>
        <ul
          className="list-group"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-once="false"
        >
          <li className="list-group-item text-primary">
            Mission to simplify the complex coding landscape.
          </li>
          <li className="list-group-item text-primary">
            Flexible workflow & pricing options.
          </li>
          <li className="list-group-item text-primary">
            In-house data privacy & security team.
          </li>
          <li className="list-group-item text-primary">
            Increase in levels of billing.
          </li>
          <li className="list-group-item text-primary">HIPAA Compliant.</li>
          <li className="list-group-item text-primary">
            Driving efficiency and accuracy in healthcare operations.
          </li>
          <li className="list-group-item text-primary">
            Commitment to innovation.
          </li>
          <li className="list-group-item text-primary">
            Empowering healthcare providers with cutting-edge solutions.
          </li>
        </ul>
      </div>
    </div>
  );
}

export function AboutFuture() {
  return (
    <section className="aboutfuture">
      <div className="container my-5">
        <h2 className="mt-2 text-center text-primary fs-1" data-aos="fade-up"
        data-aos-once="false"
        data-aos-duration="1300">
          SHAPING THE FUTURE OF MEDICAL CODING
        </h2>
        <p
          className="mb-5 text-center fs-3 fw-semibold"
          style={{ color: "rgb(106, 165, 59)" }} data-aos="fade-up"
          data-aos-once="false"
          data-aos-duration="1300"
        >
          Key goals for the future:
        </p>
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="future-card"
              data-aos="zoom-out"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="futureicon">
                <FontAwesomeIcon
                  icon={faMedkit}
                  className="fa-2x"
                ></FontAwesomeIcon>
              </div>
              <div className="custom-card-content text-center">
                <h4 className="card-title">
                  Become the go-to solution for medical coding.
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="future-card"
              data-aos="zoom-out"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="futureicon">
                <FontAwesomeIcon
                  icon={faGlobeAmericas}
                  className="fa-2x"
                ></FontAwesomeIcon>
              </div>
              <div className="custom-card-content text-center">
                <h4 className="card-title">
                  Expand, match, and collaborate with more healthcare providers
                  globally.
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="future-card"
              data-aos="zoom-out"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="futureicon">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="fa-2x"
                ></FontAwesomeIcon>
              </div>
              <div className="custom-card-content text-center">
                <h4 className="card-title">
                  Elevate service delivery by incorporating cutting-edge
                  features to stay at the forefront of the evolving healthcare
                  landscape.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function RefundPolicy() {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Refund Policy</h2>
          <p className="text-success fs-5 fw-semibold">
            Transparency in Every Transaction
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="p-4 p-md-5 bg-white rounded-3 border border-2 border-light shadow-sm">
              <h5 className="fw-semibold text-success mb-4">
                Non-Refundable Items/Policy:
              </h5>

              <ul className="list-unstyled text-dark fs-6 mb-4">
                <li className="mb-2">
                  ✅ Services already rendered (unless billing error proven)
                </li>
                <li className="mb-2">
                  ✅ Non-recoverable administrative costs
                </li>
                <li className="mb-2">
                  ✅ Application/processing fees
                </li>
              </ul>

              <p className="text-black m-0">
                <strong>Note:</strong> We strictly adhere to applicable standards including:
                <br />
                <span className="d-block">• GAAP – Generally Accepted Accounting Principles</span>
                <span className="d-block">• HIPAA – Health Insurance Portability and Accountability Act</span>
                <span className="d-block">• Consumer Rights Laws – as per applicable regulations</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <div className="main">
      <AboutHero />
      <AboutWhoWeAre />
      <AboutWhyChooseUs />
      <AboutAdvantages />
      <RefundPolicy/>
      <AboutFuture />
    </div>
  );
}
