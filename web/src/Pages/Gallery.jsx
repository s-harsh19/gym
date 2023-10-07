import React from 'react'

export default function Gallery() {
  return (
    <div>
      <>
  {/* bradcam_area */}
  <div className="bradcam_area">
    <div className="single_bradcam  d-flex align-items-center bradcam_bg_3 overlay">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-9">
            <div className="bradcam_text text-center">
              <h3>gallery</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* bradcam_area end */}
  {/* gallery_start */}
  <div className="gallery_area">
    <div className="single_gallery big_img">
      <div className="hover_pop">
        <a className="popup-image" href="img/gallery/1.png">
          <i className="ti-plus" />
        </a>
      </div>
      <img src="img/gallery/1.png" alt="" />
    </div>
    <div className="single_gallery big_img">
      <div className="hover_pop">
        <a className="popup-image" href="img/gallery/2.png">
          <i className="ti-plus" />
        </a>
      </div>
      <img src="img/gallery/2.png" alt="" />
    </div>
    <div className="single_gallery small_img">
      <div className="hover_pop">
        <a className="popup-image" href="img/gallery/3.png">
          <i className="ti-plus" />
        </a>
      </div>
      <img src="img/gallery/3.png" alt="" />
    </div>
    <div className="single_gallery small_img">
      <div className="hover_pop">
        <a className="popup-image" href="img/gallery/4.png">
          <i className="ti-plus" />
        </a>
      </div>
      <img src="img/gallery/4.png" alt="" />
    </div>
    <div className="single_gallery big_img">
      <div className="hover_pop">
        <a className="popup-image" href="img/gallery/5.png">
          <i className="ti-plus" />
        </a>
      </div>
      <img src="img/gallery/5.png" alt="" />
    </div>
    <div className="single_gallery big_img">
      <div className="hover_pop">
        <a className="popup-image" href="img/gallery/6.png">
          <i className="ti-plus" />
        </a>
      </div>
      <img src="img/gallery/6.png" alt="" />
    </div>
  </div>
  {/* gallery_area_end  */}
  <a href="#" className="view_pore boxed-btn3">
    View More
  </a>
  {/* big_offer_area start  */}
  <div className="big_offer_area">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="offter_text text-center">
            <h3>
              A Big Offer for <br />
              This Summer
            </h3>
            <a href="#" className="boxed-btn3">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* big_offer_area end  */}
</>

    </div>
  )
}
