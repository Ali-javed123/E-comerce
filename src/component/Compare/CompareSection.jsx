import React from 'react'

export default function CompareSection() {
  return (
<div className="compare-page-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/* Compare Page Content Start */}
        <div className="compare-page-content-wrap">
          <div className="compare-table table-responsive">
            <table className="table table-bordered mb-0">
              <tbody>
                <tr>
                  <td className="first-column">Product</td>
                  <td className="product-image-title">
                    <a href="single-product.html" className="image">
                      <img className="img-fluid" src="assets/img/product/product-img4.jpg" alt="Compare Product" />
                    </a>
                    <a href="#" className="category">Daimond</a>
                    <a href="single-product-sale.html" className="title">wet food</a>
                  </td>
                  <td className="product-image-title">
                    <a href="single-product.html" className="image">
                      <img className="img-fluid" src="assets/img/product/product-img5.jpg" alt="Compare Product" />
                    </a>
                    <a href="#" className="category">Gold</a>
                    <a href="single-product-group.html" className="title">organic food</a>
                  </td>
                  <td className="product-image-title">
                    <a href="single-product.html" className="image">
                      <img className="img-fluid" src="assets/img/product/product-img2.jpg" alt="Compare Product" />
                    </a>
                    <a href="#" className="category">Ring</a>
                    <a href="single-product.html" className="title">dry food</a>
                  </td>
                </tr>
                <tr>
                  <td className="first-column">Description</td>
                  <td className="pro-desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nulla, explicabo iste a rerum pariatur.</p>
                  </td>
                  <td className="pro-desc">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit commodi obcaecati cumque consectetur alias incidunt?</p>
                  </td>
                  <td className="pro-desc">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, facere. Fuga asperiores inventore iste tempora.</p>
                  </td>
                </tr>
                <tr>
                  <td className="first-column">Price</td>
                  <td className="pro-price">$295</td>
                  <td className="pro-price">$275</td>
                  <td className="pro-price">$395</td>
                </tr>
                <tr>
                  <td className="first-column">Color</td>
                  <td className="pro-color">Black</td>
                  <td className="pro-color">Red</td>
                  <td className="pro-color">Blue</td>
                </tr>
                <tr>
                  <td className="first-column">Stock</td>
                  <td className="pro-stock">In Stock</td>
                  <td className="pro-stock">Stock Out</td>
                  <td className="pro-stock">In Stock</td>
                </tr>
                <tr>
                  <td className="first-column">Add to cart</td>
                  <td><a href="cart.html" className="sqr-btn">Add to Cart</a></td>
                  <td><a href="cart.html" className="sqr-btn disabled">Add to Cart</a></td>
                  <td><a href="cart.html" className="sqr-btn">Add to Cart</a></td>
                </tr>
                <tr>
                  <td className="first-column">Rating</td>
                  <td className="pro-ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </td>
                  <td className="pro-ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </td>
                  <td className="pro-ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </td>
                </tr>
                <tr>
                  <td className="first-column">Remove</td>
                  <td className="pro-remove">
                    <button><i className="fa fa-trash-o" /></button>
                  </td>
                  <td className="pro-remove">
                    <button><i className="fa fa-trash-o" /></button>
                  </td>
                  <td className="pro-remove">
                    <button><i className="fa fa-trash-o" /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Compare Page Content End */}
      </div>
    </div>
  </div>
</div>

  )
}
