import React from 'react'
import { Link } from 'react-router-dom'
export default function ContactUsBreadcrum() {
  return (
    <>
{/* breadcrumb area start */}
<div className="breadcrumb-area">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="breadcrumb-wrap">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">contact us</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
{/* breadcrumb area end */}

    </>
  )
}