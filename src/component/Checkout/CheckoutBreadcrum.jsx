import React from 'react'

export default function CheckoutBreadcrum() {
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
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="shop-grid-left-sidebar.html">shop</a></li>
              <li className="breadcrumb-item active" aria-current="page">checkout</li>
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