import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import heroImage from "./components/img/hero-img.png";
import aboutImage from "./components/img/about.jpg";
import featureImage from "./components/img/features.png";

const App = () => {
  return (
    <div>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <span>Payxmi</span>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  How use it
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Contact Us
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Other Service</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Booking</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#register">
                  Sign Up
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#login">
                  Login
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Now book your </h1>
              <div className="multiimage">
                <h1>
                  <span style={{ color: "aqua" }}>tickets</span>&nbsp; with{" "}
                  <span style={{ color: "aqua" }}> Payxmi</span>
                </h1>
              </div>
              <h2
                data-aos="fade-up"
                data-aos-delay="400"
                style={{ fontSize: "15px" }}
              >
                Discover new distination with our app. <br /> find new place
                where pass your vacation
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a
                    href="#about"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>More Info</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="multiimage1">
                <img src={heroImage} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0" style={{ backgroundColor: "black" }}>
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src={aboutImage} className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-6 d-flex flex-column justify-content-center float-right
          "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="content" style={{ backgroundColor: "black" }}>
                  <h1
                    style={{
                      textAlign: "right",
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    Book the most <br /> magnificant events <br />
                    within second.
                  </h1>
                  <p
                    style={{
                      color: "white",
                      textAlign: "right",
                      fontWeight: "700",
                    }}
                  >
                    Get your chance to see the most incredible concert
                    <br /> or events nearby you.
                  </p>
                  <div className="text-center float-right">
                    <a
                      href="#"
                      className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>More Info</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">
                  <h1 style={{ fontWeight: "700" }}>
                    With Payxmi you <br /> can book{" "}
                    <span style={{ color: "aqua" }}> Travel Tickets</span>
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                  <div className="text-center float-right">
                    <div
                      style={{
                        backgroundColor: "#4154f1",
                        color: "white",
                        width: "150px",
                        borderRadius: "50px",
                        padding: "10px",
                      }}
                    >
                      <a
                        href="#"
                        className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                        style={{ color: "white" }}
                      >
                        <span>More Info</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <img src={featureImage} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6">
                <img src={featureImage} className="img-fluid" alt="" />
              </div>

              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">
                  <h1 style={{ fontWeight: "700" }}>
                    Book the most iconic <br /> attractions to amazing <br />
                    experiencs
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                  <div className="text-center float-right">
                    <div
                      style={{
                        backgroundColor: "#4154f1",
                        color: "white",
                        width: "150px",
                        borderRadius: "50px",
                        padding: "10px",
                      }}
                    >
                      <a
                        href="#"
                        className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                        style={{ color: "white" }}
                      >
                        <span>More Info</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
