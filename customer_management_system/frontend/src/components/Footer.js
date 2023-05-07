import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted text-white">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white">
        <div>
          <a href="/" className="me-4 text-reset">
            <i className="fab fa-facebook-f text-white"></i>
          </a>
          <a href="/" className="me-4 text-reset text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5 text-white">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem"></i>FIND US
              </h6>
              <p>
                <HiLocationMarker />
                Sunshine Consumer Lanka Ltd.,
                No 60, Dharmapala Mawatha,
                Colombo 03, Sri Lanka.
              </p>
              <p>
                <AiFillMail />
                Email: info@serandip.com
              </p>
              <p>
                <BsFillTelephoneFill />
                Phone: +94 114 702 400
                       
              </p>
            </div>

            

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4"> CUSTOMER SERVICE </h6>
              <p>
                <i className="fas fa-home me-3"></i> Help Center
              </p>
              <p>
                <i className="fas fa-home me-3"></i> Contact Us
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>General Policies
              
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> Returns & Credit Policy
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4"> OUR ASSOCIATE COMPANIES </h6>
              <p>
                <i className="fas fa-home me-3"></i> PCL Solutions
              </p>
              <p>
                <i className="fas fa-home me-3"></i> Kahawatte Plantations
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>MJF Exports
              
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> Forbes & Walker Tea Brokers
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
       Serandip Tea Brokers PLC
        </a>
        <br />
        <i className="text-reset fw-bold">
        © 2023 Serandip Tea Brokers PLC, Powered by Textus Technology Solutions.
        </i>
      </div>
    </footer>
  );
}

export default Footer;