import React from 'react'

export default function MyAccountBreadcrum() {
  return (
   <div className="breadcrumb-area">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="breadcrumb-wrap">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">my account</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
