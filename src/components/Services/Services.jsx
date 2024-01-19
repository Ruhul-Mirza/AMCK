import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faCode,
  faShield,
  faDollarSign,
  faPhone,
  faClipboard,
  faCheckCircle,
  fa1,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <div className="main">
      <ServiceHero />
      <ServiceWhoWeService />
      <ServiceCoding />
      <ServiceHipa />
    </div>
  );
};

export const ServiceHero = () => {
  return (
    <section
      className="top"
      data-aos="fade-up"
      data-aos-once="false"
      data-aos-duration="1300"
    >
      <div className="overlayservices"></div>
      <div className="container">
        <h1 className="display-4 fw-bold">Services</h1>
      </div>
    </section>
  );
};

export const ServiceWhoWeService = () => {
  return (
    <div className="services pb-2">
      <div
        id="serviceshead"
        className="text-center pt-5 pb-3"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
        data-aos-duration="2000"
      >
        <h1 className="fs-1 mb-3 fw-semibold text-white">Our Services</h1>
        <p className="lead fs-6 mt-5 mb-3 fw-semibold text-white">
          AMCK Knowledge Solutions has ability to deal with any speciality. Our
          professionals are expert in multi-specialities.
        </p>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div
              className="card custom-card"
              data-aos="zoom-out"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="fa-2x"
                ></FontAwesomeIcon>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Revenue Cycle Management</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div
              className="card custom-card"
              data-aos="zoom-out"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faCode}
                  className="fa-2x"
                ></FontAwesomeIcon>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Medical Coding</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div
              className="card custom-card"
              data-aos="zoom-out"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faShield}
                  className="fa-2x"
                ></FontAwesomeIcon>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Insurance Verification</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div
              className="card custom-card"
              data-aos="zoom-out"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="fa-2x"
                ></FontAwesomeIcon>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Payment Posting</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div
              className="card custom-card"
              data-aos="zoom-out"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="fa-2x"
                ></FontAwesomeIcon>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Patient Follow-up</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div
              className="card custom-card"
              data-aos="zoom-out"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faClipboard}
                  className="fa-2x"
                ></FontAwesomeIcon>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Scribing Services</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ServiceCoding() {
  return (
    <div className="expertisemain">
      <div className="container expertise-section">
        <h2
          className="expertise-heading display-4 mb-5 mt-3 text-white"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-once="false"
        >
          Coding Expertise
        </h2>
        <ul
          className="list-group"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-once="false"
        >
          <li className="list-group-item text-primary">
            <p className="expertise-description">
              Conducting comprehensive reviews to ensure accurate and compliant
              HCC coding for optimal risk adjustment.
            </p>
          </li>
          <li className="list-group-item text-primary">
            <p className="expertise-description">
              Creating visually appealing and user-friendly interfaces for a
              seamless user experience.
            </p>
          </li>
          <li className="list-group-item text-primary">
            <p className="expertise-description">
              Implementing strategies to optimize Risk Adjustment Factors,
              enhancing overall coding precision.
            </p>
          </li>
          <li className="list-group-item text-primary">
            <p className="expertise-description">
              Creating visually appealing and user-friendly interfaces for a
              seamless user experience.
            </p>
          </li>
          <li className="list-group-item text-primary">
            <p className="expertise-description">
              Validating Diagnosis Related Groupings to ensure accuracy in
              healthcare coding and billing.
            </p>
          </li>
          <li className="list-group-item text-primary">
            <p className="expertise-description">
              Conducting audits to maintain payment integrity, ensuring
              adherence to industry standards and regulations.
            </p>
          </li>
          <li className="list-group-item text-primary">
            <p className="expertise-description">
              Performing meticulous audits based on National Correct Coding
              Initiative (NCCI) principles, with a focus on Variance Analysis
              (VA) and Variance Explanation (VE).
            </p>
          </li>
          <li className="list-group-item text-primary">
            <p className="expertise-description">
              Analyzing Evaluation and Management (E/M) levels for utilization
              and benchmarking against industry standards.
            </p>
          </li>
          <li className="list-group-item text-primary">
            <p className="expertise-description">
              Conducting audits to assess and ensure compliance with medical
              necessity guidelines.
            </p>
          </li>
          <li className="list-group-item text-primary">
            <p className="expertise-description">
              Performing detailed clinical reviews tailored for Workers
              Compensation and Auto No Fault cases, ensuring accuracy and
              compliance with specific regulatory requirements.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function ServiceHipa() {
  return (
    <div className="container mt-5 text-center">
      <h2
        className="mb-5 text-primary fs-1 text-center"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once="false"
      >
        HIPAA & CONTROLS
      </h2>
      <div className="row justify-content-between">
        <div className="col-md-6 mb-4">
          <div
            className="card-container"
            data-aos="zoom-in-down"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <div className="rounded-circle-container">
              <div className="rounded-circle text-white fs-4">1</div>
            </div>
            <p className="text-primary mt-3">Azure platform.</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div
            className="card-container"
            data-aos="zoom-in-down"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <div className="rounded-circle-container">
              <div className="rounded-circle text-white fs-4">2</div>
            </div>
            <p className="text-primary mt-3">
              HIPAA training to all employees handling PHI.
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div
            className="card-container"
            data-aos="zoom-in-down"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <div className="rounded-circle-container">
              <div className="rounded-circle text-white fs-4">3</div>
            </div>
            <p className="text-primary mt-3">
              Written agreements with all business associates handling PHI.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div
            className="card-container"
            data-aos="zoom-in-down"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <div className="rounded-circle-container">
              <div className="rounded-circle text-white fs-4">4</div>
            </div>
            <p className="text-primary mt-3">
              Designated HIPAA officer responsible for overseeing compliance
              efforts.
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div
            className="card-container"
            data-aos="zoom-in-down"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <div className="rounded-circle-container">
              <div className="rounded-circle text-white fs-4">5</div>
            </div>
            <p className="text-primary mt-3">
              A comprehensive security risk assessment to identify
              vulnerabilities and risks to PHI.
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div
            className="card-container"
            data-aos="zoom-in-down"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <div className="rounded-circle-container">
              <div className="rounded-circle text-white fs-4">6</div>
            </div>
            <p className="text-primary mt-3">
              Only authorized individuals have access to PHI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
