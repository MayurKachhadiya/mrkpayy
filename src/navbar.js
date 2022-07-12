import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link  className="navbar-brand scroll-behavior " to="#home">
              MRKPAY
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active scroll-behavior"  to="#home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scroll-behavior"  to="#services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scroll-behavior"  to="#aboute">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scroll-behavior"  to="#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        
      </section>
    </>
  );
};

export default Navbar;
