import React from 'react'
export default function Footer() {
  return (
    <div>
      <>
  {/* footer_start  */}
  <footer className="footer">
    <div className="footer_top">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-6 col-lg-3 ">
            <div className="footer_widget">
              <div className="footer_logo">
                <a href="#">
                  <img src="img/footer_logo.png" alt="" />
                </a>
              </div>
              <p>
                5th flora, 700/D kings road, green <br /> lane New York-1782{" "}
                <br />
                <a href="#">+10 367 826 2567</a> <br />
                <a href="#">contact@carpenter.com</a>
              </p>
              <p></p>
              <div className="socail_links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 offset-xl-1">
            <div className="footer_widget">
              <h3 className="footer_title">Useful Links</h3>
              <ul className="links">
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#"> Gallery</a>
                </li>
                <li>
                  <a href="#"> Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="footer_widget">
              <h3 className="footer_title">Subscribe</h3>
              <form action="#" className="newsletter_form">
                <input type="text" placeholder="Enter your mail" />
                <button type="submit">Subscribe</button>
              </form>
              <p className="newsletter_text">
                Esteem spirit temper too say adieus who direct esteem esteems
                luckily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  </footer>
  {/* footer_end  */}
</>

    </div>
  )
}
