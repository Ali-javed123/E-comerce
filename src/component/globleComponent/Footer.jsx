import React from 'react'

export default function Footer() {
  return (
    <>
{/* footer area start */}
<footer>
  {/* footer top start */}
  <div className="footer-top bg-black pt-14 pb-14">
    <div className="container">
      <div className="footer-top-wrapper">
        <div className="newsletter__wrap">
          <div className="newsletter__title">
            <div className="newsletter__icon">
              <i className="fa fa-envelope" />
            </div>
            <div className="newsletter__content">
              <h3>sign up for newsletter</h3>
              <p>Duis autem vel eum iriureDuis autem vel eum</p>
            </div>
          </div>
          <div className="newsletter__box">
            <form id="mc-form">
              <input type="email" id="mc-email" autoComplete="off" placeholder="Email" />
              <button id="mc-submit">subscribe!</button>
            </form>
          </div>
          {/* mailchimp-alerts Start */}
          <div className="mailchimp-alerts">
            <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
            <div className="mailchimp-success" />{/* mailchimp-success end */}
            <div className="mailchimp-error" />{/* mailchimp-error end */}
          </div>
          {/* mailchimp-alerts end */}
        </div>
        <div className="social-icons">
          <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" /></a>
          <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" /></a>
          <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa fa-instagram" /></a>
          <a href="#" data-toggle="tooltip" data-placement="top" title="Google-plus"><i className="fa fa-google-plus" /></a>
          <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="fa fa-youtube" /></a>
        </div>
      </div>
    </div>
  </div>
  {/* footer top end */}
  {/* footer main start */}
  <div className="footer-widget-area pt-40 pb-38 pb-sm-10">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="footer-widget mb-sm-30">
            <div className="widget-title mb-10 mb-sm-6">
              <h4>contact us</h4>
            </div>
            <div className="widget-body">
              <ul className="location">
                <li><i className="fa fa-envelope" />support@galio.com</li>
                <li><i className="fa fa-phone" />(800) 0123 456 789</li>
                <li><i className="fa fa-map-marker" />Address: 1234 - Bandit Tringi Aliquam
                  Vitae. New York</li>
              </ul>
              <a className="map-btn" href="contact-us.html">open in google map</a>
            </div>
          </div> {/* single widget end */}
        </div> {/* single widget column end */}
        <div className="col-md-3 col-sm-6">
          <div className="footer-widget mb-sm-30">
            <div className="widget-title mb-10 mb-sm-6">
              <h4>my account</h4>
            </div>
            <div className="widget-body">
              <ul>
                <li><a href="#">my account</a></li>
                <li><a href="#">my cart</a></li>
                <li><a href="#">checkout</a></li>
                <li><a href="#">my wishlist</a></li>
                <li><a href="#">login</a></li>
              </ul>
            </div>
          </div> {/* single widget end */}
        </div> {/* single widget column end */}
        <div className="col-md-3 col-sm-6">
          <div className="footer-widget mb-sm-30">
            <div className="widget-title mb-10 mb-sm-6">
              <h4>short code</h4>
            </div>
            <div className="widget-body">
              <ul>
                <li><a href="#">gallery</a></li>
                <li><a href="#">accordion</a></li>
                <li><a href="#">carousel</a></li>
                <li><a href="#">map</a></li>
                <li><a href="#">tab</a></li>
              </ul>
            </div>
          </div> {/* single widget end */}
        </div> {/* single widget column end */}
        <div className="col-md-3 col-sm-6">
          <div className="footer-widget mb-sm-30">
            <div className="widget-title mb-10 mb-sm-6">
              <h4>product tags</h4>
            </div>
            <div className="widget-body">
              <ul>
                <li><a href="#">computer</a></li>
                <li><a href="#">camera</a></li>
                <li><a href="#">smart phone</a></li>
                <li><a href="#">watch</a></li>
                <li><a href="#">tablet</a></li>
              </ul>
            </div>
          </div> {/* single widget end */}
        </div> {/* single widget column end */}
      </div>
    </div>
  </div>
  {/* footer main end */}
  {/* footer bootom start */}
  <div className="footer-bottom-area bg-gray pt-20 pb-20">
    <div className="container">
      <div className="footer-bottom-wrap">
        <div className="copyright-text">
          <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
        </div>
        <div className="payment-method-img">
          <img src="assets/img/payment.png" alt />
        </div>
      </div>
    </div>
  </div>
  {/* footer bootom end */}
</footer>
{/* footer area end */}

    </>
  )
}
