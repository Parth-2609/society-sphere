import React from "react";
import "./style.css";

const Footer = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="footer-block">
        <div className="footer-content">

          <div className="col-lg-4">
            <h2>About us </h2>
            <h6 className="list-unstyled">
              <p>
                Society sphere is a website, which provides information about
                all the recent and ongoing events in our college premises not
                only that, this website will also,help you understand societies
                in detail, this will be very beneficial for the new students who
                are in their first year and wants to explore such technical,
                non-technical and various different cells/societies of BVCOE.
              </p>
            </h6>
          </div>

          <div className="col-lg-4">
            <h2>Links</h2>
            <ul className="list-unstyled">
              <h6 className="footer-links">
                <a href="#RecentEventCarousel">Societies Recent Event</a>
              </h6>
              <h6 className="footer-links">
                <a href="#FlipCardId">All Societies</a>
              </h6>

              <div className="social">
                <a href="https://www.instagram.com/mlsac_bvcoe/">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://twitter.com/MlscBvp">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/mlsacbvp/mycompany/">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/mlsacbvp">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div className="copyright-block">
          {/* <p className="col-sm">
            Copyright &copy; {new Date().getFullYear()} MLSACBVP. All
            rights reserved.
          </p> */}
          <p className="col-sm">
            Designed and Developed by team MLSAC-BVP
          </p>
        </div>
      </div>

      <div className="back-to-top">
        <button onClick={top} className="btn">
          <img src="https://i.imgur.com/etdZqUD.png" alt="top"></img>
        </button>
      </div>
    </div>
  );
};

export default Footer;
