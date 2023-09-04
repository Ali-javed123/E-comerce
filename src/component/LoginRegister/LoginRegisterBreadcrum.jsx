import React from 'react'
import { Link } from 'react-router-dom'
export default function LoginRegisterBreadcrum() {
  return (
<div className="breadcrumb-area">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="breadcrumb-wrap">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">login-register</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}
