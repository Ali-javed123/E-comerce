import React from 'react'

export default function WhislistLayout() {
  return (
 <div className="wishlist-main-wrapper">
  <div className="container">
    {/* Wishlist Page Content Start */}
    <div className="row">
      <div className="col-lg-12">
        {/* Wishlist Table Area */}
        <div className="cart-table table-responsive">
          <table className="table table-bordered">
            <thead >
              <tr>
                <th className="text-dark pro-thumbnail">Thumbnail</th>
                <th className="text-dark pro-title">Product</th>
                <th className="text-dark pro-price">Price</th>
                <th className="text-dark pro-quantity">Stock Status</th>
                <th className="text-dark pro-subtotal">Add to Cart</th>
                <th className="text-dark pro-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product/product-img7.jpg" alt="Product" /></a></td>
                <td className="pro-title"><a href="#">element snowboard</a></td>
                <td className="pro-price"><span>$295.00</span></td>
                <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                <td className="pro-subtotal"><a href="cart.html" className="sqr-btn text-white">Add to Cart</a></td>
                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
              </tr>
              <tr>
                <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product/product-img8.jpg" alt="Product" /></a></td>
                <td className="pro-title"><a href="#">raygun snowboard</a></td>
                <td className="pro-price"><span>$275.00</span></td>
                <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                <td className="pro-subtotal"><a href="cart.html" className="sqr-btn text-white">Add to Cart</a></td>
                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
              </tr>
              <tr>
                <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product/product-img9.jpg" alt="Product" /></a></td>
                <td className="pro-title"><a href="#">berzerker snoeboard</a></td>
                <td className="pro-price"><span>$295.00</span></td>
                <td className="pro-quantity"><span className="text-danger">Stock Out</span></td>
                <td className="pro-subtotal"><a href="cart.html" className="sqr-btn text-white disabled">Add to Cart</a></td>
                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
              </tr>
              <tr>
                <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product/product-img10.jpg" alt="Product" /></a></td>
                <td className="pro-title"><a href="#">turbo snowboard</a></td>
                <td className="pro-price"><span>$110.00</span></td>
                <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                <td className="pro-subtotal"><a href="cart.html" className="sqr-btn text-white">Add to Cart</a></td>
                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* Wishlist Page Content End */}
  </div>
</div>


  )
}
