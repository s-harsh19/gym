import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <>
  {/* header-start */}
  <header>
    <div className="header-area ">
      <div id="sticky-header" className="main-header-area">
        <div className="container-fluid ">
          <div className="header_bottom_border">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">home</Link>
                      </li>
                      <li>
                        <Link to="/About">about</Link>
                      </li>
                      <li>
                        <Link to="/Pricing">pricing</Link>
                      </li>
                      <li>
                        <Link to="/Gallery">gallery</Link>
                      </li>
                   
                      <li>
                        <Link to="/Blog">
                          blog <i className="ti-angle-down" />
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/Blog">blog</Link>
                          </li>
                          <li>
                            <Link to="SingleBlog">single-blog</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/Contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/Login">Login</Link>
                      </li>
                      <li>
                        <Link to="/Register">Register</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="Appointment">
                  <div className="book_btn d-none d-lg-block">
                    <a href="#">Join Us</a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* header-end */}
</>

    </div>
  )
}
