import React from 'react'

export default function LoginRegisterLayout() {
  return (
    <>
  {/* login register wrapper start */}
<section >
  <div className="container">
    <div className="member-area-from-wrap">
      <div className="row">
        {/* Login Content Start */}
        <div className="col-lg-6">
          <div className="login-reg-form-wrap  pr-lg-50">
            <h2>Sign In</h2>
            <form action="#" method="post">
              <div className="single-input-item">
                <input type="email" placeholder="Email or Username" required />
              </div>
              <div className="single-input-item">
                <input type="password" placeholder="Enter your Password" required />
              </div>
              <div className="single-input-item">
                <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                  <div className="remember-meta">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="rememberMe" />
                      <label className="custom-control-label" htmlFor="rememberMe">Remember Me</label>
                    </div>
                  </div>
                  <a href="#" className="forget-pwd">Forget Password?</a>
                </div>
              </div>
              <div className="single-input-item">
                <button className="sqr-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
        {/* Login Content End */}
        {/* Register Content Start */}
        <div className="col-lg-6">
          <div className="login-reg-form-wrap mt-md-34 mt-sm-34">
            <h2>Singup Form</h2>
            <form action="#" method="post">
              <div className="single-input-item">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="single-input-item">
                <input type="email" placeholder="Enter your Email" required />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-input-item">
                    <input type="password" placeholder="Enter your Password" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-input-item">
                    <input type="password" placeholder="Repeat your Password" required />
                  </div>
                </div>
              </div>
              <div className="single-input-item">
                <div className="login-reg-form-meta">
                  <div className="remember-meta">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="subnewsletter" />
                      <label className="custom-control-label" htmlFor="subnewsletter">Subscribe Our Newsletter</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-input-item">
                <button className="sqr-btn">Register</button>
              </div>
            </form>
          </div>
        </div>
        {/* Register Content End */}
      </div>
    </div>
  </div>
</section>
{/* login register wrapper end */}
    </>

  )
}
