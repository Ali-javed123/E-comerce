import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export default function LoginRegisterLayout() {
  const [show,setshow]=useState('sign In')
  return (
    <>
  {/* login register wrapper start */}
{/* <section >
  <div className="container">
    <div className="member-area-from-wrap">
      <div className="row">
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
      </div>
    </div>
  </div>
</section> */}
{/* login register wrapper end */}
<section>
  <div className="container">
<div className="row justify-content-center mb-2 ">
  <div className="col-md-2 col-sm-2">
    <button onClick={()=>setshow('sign In')} className='btn btn-danger btn-pills'>Sign In</button>

    <button onClick={()=>setshow('sign Up')} className='btn btn-danger btn-pills ml-4'>Sign Up</button>
  </div>
 
</div>
{show=='sign In'?
<div className="row justify-content-center">

      <div className="col-md-6">
        <div className="card py-2">
          <div className="card-body">
            <div style={{textAlign:"start",alignItems:"start"}}>
              <h2 className='mb-3'>Sign In</h2>
            </div>

     <form>
  <div className="mb-3" style={{textAlign:"start",alignItems:"start"}}>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3" style={{textAlign:"start",alignItems:"start"}}>
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check" style={{textAlign:"start",alignItems:"start"}}>
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    <Link className='pull-right text-danger'>Forget Password?</Link>
  </div>
  <div style={{textAlign:"start",alignItems:"start"}}>

  <button type="submit" className="btn btn-danger px-4 mt-2 " style={{textAlign:"start",alignItems:"start"}}>Submit</button>
  </div>
</form>
          </div>
        </div>

      </div>
</div>:show=='sign Up'?
    <div className="row justify-content-center">
      <div className="col-md-6">
      <div className="card ">
          <div className="card-body">
            <div style={{textAlign:"start",alignItems:"start"}}>
              <h2 className='mb-3'>Sign Up Form</h2>
            </div>

     <form>

  <div className="mb-3" style={{textAlign:"start",alignItems:"start"}}>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3" style={{textAlign:"start",alignItems:"start"}}>
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="row">

  <div className="col-md-6">
  <div className="mb-3" style={{textAlign:"start",alignItems:"start"}}>
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  </div>
  <div className="col-md-6">
  <div className="mb-3" style={{textAlign:"start",alignItems:"start"}}>
    <label htmlFor="exampleInputPassword1" className="form-label">Conform Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  </div>
  </div>
  <div className="row">
    <div className="col-md-6">

  <div className="mb-3 form-check" style={{textAlign:"start",alignItems:"start"}}>
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    {/* <Link className='pull-right text-danger'>Forget Password?</Link> */}
  </div>
    </div>
    <div className="col-md-6">

  <div style={{textAlign:"start",alignItems:"start"}}>

  <button type="submit" className="btn btn-danger px-4 mt-2 " style={{textAlign:"start",alignItems:"start"}}>Submit</button>
  </div>
    </div>
  </div>
</form>
          </div>
        </div>
      </div>
    </div>:null

}
  </div>
</section>
    </>

  )
}
