import React from 'react'
import { Link,NavLink } from 'react-router-dom'
export default function CheckoutSection() {
  return (
  
<div className="checkout-page-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-12">
        {/* Checkout Login Coupon Accordion Start */}
        <div className="checkoutaccordion" id="checkOutAccordion">
          <div className="card">
            <h3>Returning Customer? <span data-toggle="collapse" data-target="#logInaccordion">Click Here To Login</span></h3>
            <div id="logInaccordion" className="collapse" data-parent="#checkOutAccordion">
              <div className="card-body">
                <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                <div className="login-reg-form-wrap mt-20">
                  <div className="row">
                    <div className="col-lg-7 m-auto">
                      <form >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="single-input-item">
                              <input type="email" placeholder="Enter your Email" required />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="single-input-item">
                              <input type="password" placeholder="Enter your Password" required />
                            </div>
                          </div>
                        </div>
                        <div className="single-input-item">
                          <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                            <div className="remember-meta">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="rememberMe" required />
                                <label className="custom-control-label" htmlFor="rememberMe">Remember Me</label>
                              </div>
                            </div>
                            <a href="#" className="forget-pwd">Forget Password?</a>
                          </div>
                        </div>
                        <div className="single-input-item">
                          <button className="check-btn sqr-btn">Login</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Have A Coupon? <span data-toggle="collapse" data-target="#couponaccordion">Click Here To Enter Your Code</span></h3>
            <div id="couponaccordion" className="collapse" data-parent="#checkOutAccordion">
              <div className="card-body">
                <div className="cart-update-option">
                  <div className="apply-coupon-wrapper">
                    <form  className=" d-block d-md-flex">
                      <input type="text" placeholder="Enter Your Coupon Code" required />
                      <button className="check-btn sqr-btn">Apply Coupon</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Checkout Login Coupon Accordion End */}
      </div>
    </div>
    <div className="row">
      {/* Checkout Billing Details */}
      <div className="col-lg-6">
        <div className="checkout-billing-details-wrap">
          <h2>Billing Details</h2>
          <div className="billing-form-wrap">
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-input-item text-start">
                    <label htmlFor="f_name" className="required">First Name</label>
                    <input type="text" id="f_name" placeholder="First Name" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-input-item text-start">
                    <label htmlFor="l_name" className="required">Last Name</label>
                    <input type="text" id="l_name" placeholder="Last Name" required />
                  </div>
                </div>
              </div>
              <div className="single-input-item text-start">
                <label htmlFor="email" className="required">Email Address</label>
                <input type="email" id="email" placeholder="Email Address" required />
              </div>
              <div className="single-input-item text-start">
                <label htmlFor="com-name">Company Name</label>
                <input type="text" id="com-name" placeholder="Company Name" />
              </div>
              <div className="single-input-item text-start">
                <label htmlFor="country" className="required">Country</label>
                <select name="country nice-select" className='form-select' id="country">
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="England">England</option>
                  <option value="London">London</option>
                  <option value="London">London</option>
                  <option value="Chaina">China</option>
                </select>
              </div>
              <div className="single-input-item text-start">
                <label htmlFor="street-address" className="required pt-20">Street address</label>
                <input type="text" id="street-address" placeholder="Street address Line 1" required />
              </div>
              <div className="single-input-item text-start">
                <input type="text" placeholder="Street address Line 2 (Optional)" />
              </div>
              <div className="single-input-item text-start">
                <label htmlFor="town" className="required">Town / City</label>
                <input type="text" id="town" placeholder="Town / City" required />
              </div>
              <div className="single-input-item text-start">
                <label htmlFor="state">State / Divition</label>
                <input type="text" id="state" placeholder="State / Divition" />
              </div>
              <div className="single-input-item text-start">
                <label htmlFor="postcode" className="required">Postcode / ZIP</label>
                <input type="text" id="postcode" placeholder="Postcode / ZIP" required />
              </div>
              <div className="single-input-item text-start">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" placeholder="Phone" />
              </div>
              {/* <div className="checkout-box-wrap">
                <div className="single-input-item">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="create_pwd" />
                    <label className="custom-control-label" htmlFor="create_pwd">Create an account?</label>
                  </div>
                </div>
                <div className="account-create single-form-row">
                  <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                  <div className="single-input-item">
                    <label htmlFor="pwd" className="required">Account Password</label>
                    <input type="password" id="pwd" placeholder="Account Password" required />
                  </div>
                </div>
              </div> */}
             <div className="mb-3 form-check text-start mt-3">
  <input type="checkbox" className="form-check-input" id="exampleCheck144" />
  <label className="form-check-label" htmlFor="exampleCheck144">Craete an account?</label>
</div>
<div className="mb-3 form-check text-start mt-3">
  <input type="checkbox" className="form-check-input" id="exampleCheck143" />
  <label className="form-check-label" htmlFor="exampleCheck143">Ship to a different address?</label>
</div>
              {/* <div className="checkout-box-wrap">
                <div className="single-input-item">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ship_to_different" />
                    <label className="custom-control-label" htmlFor="ship_to_different">Ship to a different address?</label>
                  </div>
                </div>
                <div className="ship-to-different single-form-row">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-input-item">
                        <label htmlFor="f_name_2" className="required">First Name</label>
                        <input type="text" id="f_name_2" placeholder="First Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-item">
                        <label htmlFor="l_name_2" className="required">Last Name</label>
                        <input type="text" id="l_name_2" placeholder="Last Name" required />
                      </div>
                    </div>
                  </div>
                  <div className="single-input-item">
                    <label htmlFor="email_2" className="required">Email Address</label>
                    <input type="email" id="email_2" placeholder="Email Address" required />
                  </div>
                  <div className="single-input-item">
                    <label htmlFor="com-name_2">Company Name</label>
                    <input type="text" id="com-name_2" placeholder="Company Name" />
                  </div>
                  <div className="single-input-item">
                    <label htmlFor="country_2" className="required">Country</label>
                    <select name="country" id="country_2">
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="England">England</option>
                      <option value="London">London</option>
                      <option value="London">London</option>
                      <option value="Chaina">Chaina</option>
                    </select>
                  </div>
                  <div className="single-input-item">
                    <label htmlFor="street-address_2" className="required pt-20">Street address</label>
                    <input type="text" id="street-address_2" placeholder="Street address Line 1" required />
                  </div>
                  <div className="single-input-item">
                    <input type="text" placeholder="Street address Line 2 (Optional)" />
                  </div>
                  <div className="single-input-item">
                    <label htmlFor="town_2" className="required">Town / City</label>
                    <input type="text" id="town_2" placeholder="Town / City" required />
                  </div>
                  <div className="single-input-item">
                    <label htmlFor="state_2">State / Divition</label>
                    <input type="text" id="state_2" placeholder="State / Divition" />
                  </div>
                  <div className="single-input-item">
                    <label htmlFor="postcode_2" className="required">Postcode / ZIP</label>
                    <input type="text" id="postcode_2" placeholder="Postcode / ZIP" required />
                  </div>
                </div>
              </div> */}
              <div className="single-input-item text-start">
                <label htmlFor="ordernote">Order Note</label>
                <textarea name="ordernote" id="ordernote" cols={30} rows={3} placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Order Summary Details */}
      <div className="col-lg-6">
        <div className="order-summary-details mt-md-26 mt-sm-26">
          <h2>Your Order Summary</h2>
          <div className="order-summary-content mb-sm-4">
            {/* Order Summary Table */}
            <div className="order-summary-table table-responsive text-center">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Products</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Link  to="#">Suscipit Vestibulum <strong> × 1</strong></Link></td>
                    <td>$165.00</td>
                  </tr>
                  <tr>
                    <td><Link  to="#">Ami Vestibulum suscipit <strong> × 4</strong></Link></td>
                    <td>$165.00</td>
                  </tr>
                  <tr>
                    <td><Link  to="#">Vestibulum suscipit <strong> × 2</strong></Link></td>
                    <td>$165.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Sub Total</td>
                    <td><strong>$400</strong></td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td className="d-flex justify-content-center">
                      <ul className="shipping-type">
                        <li>
                          {/* <div className="custom-control custom-radio">
                            <input type="radio" id="flatrate" name="shipping" className="custom-control-input" defaultChecked />
                            <label className="custom-control-label" htmlFor="flatrate">Flat Rate: $70.00</label>
                          </div> */}
                          <div className="form-check mb-3 mt-3 text-start">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault222" defaultChecked />
    <label className="form-check-label" htmlFor="flexRadioDefault222">
    Flat Rate: $70.00
    </label>
  </div>
                        </li>
                        <li>
                          {/* <div className="custom-control custom-radio">
                            <input type="radio" id="freeshipping" name="shipping" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="freeshipping">Free Shipping</label>
                          </div> */}

                          <div className="form-check mb-3 mt-3 text-start">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2222" defaultChecked />
    <label className="form-check-label" htmlFor="flexRadioDefault2222">
    Free Shipping
    </label>
  </div>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Amount</td>
                    <td><strong>$470</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* Order Payment Method */}
            <div className="order-payment-method">
              <div className="single-payment-method show">
                {/* <div className="payment-method-name">
                  <div className="custom-control custom-radio">
                    <input type="radio" id="cashon" name="paymentmethod" defaultValue="cash" className="custom-control-input" defaultChecked />
                    <label className="custom-control-label" htmlFor="cashon">Cash On Delivery</label>
                  </div>
                </div> */}
                <div className="mb-3 form-check text-start mt-3">
  <input type="checkbox" className="form-check-input" id="exampleCheck122" />
  <label className="form-check-label" htmlFor="exampleCheck122">Cash on Delivery?</label>
</div>
                <div className="payment-method-details" data-method="cash">
                  <p>Pay with cash upon delivery.</p>
                </div>
              </div>
              <div className="single-payment-method">
                {/* <div className="payment-method-name">
                  <div className="custom-control custom-radio">
                    <input type="radio" id="directbank" name="paymentmethod" defaultValue="bank" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="directbank">Direct Bank Transfer</label>
                  </div>
                </div> */}

                <div className="mb-3 form-check text-start mt-3">
  <input type="checkbox" className="form-check-input" id="exampleCheck12" />
  <label className="form-check-label" htmlFor="exampleCheck12">Direct Bank Transfer</label>
</div>
                <div className="payment-method-details" data-method="bank">
                  <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account..</p>
                </div>
              </div>
              <div className="single-payment-method">
                {/* <div className="payment-method-name">
                  <div className="custom-control custom-radio">
                    <input type="radio" id="checkpayment" name="paymentmethod" defaultValue="check" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="checkpayment">Pay with Check</label>
                  </div>
                </div> */}

  <div className="form-check mb-3 mt-3 text-start">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Pay with check
    </label>
  </div>
  

                <div className="payment-method-details" data-method="check">
                  <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                </div>
              </div>
              <div className="single-payment-method">
                {/* <div className="payment-method-name">
                  <div className="custom-control custom-radio">
                    <input type="radio" id="paypalpayment" name="paymentmethod" defaultValue="paypal" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="paypalpayment">Paypal <img src="assets/img/paypal-card.jpg" className="img-fluid paypal-card" alt="Paypal" /></label>
                  </div>

                </div> */}
<div className="form-check mb-3 mt-3 text-start">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
      Default checked radio
    </label>
  </div>

<div>
<img src="assets/img/paypal-card.jpg" className="img-fluid paypal-card" alt="Paypal" />
</div>
                <div className="payment-method-details" data-method="paypal">
                  <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                </div>
              </div>
              <div className="summary-footer-area">
                {/* <div className="custom-control custom-checkbox mb-14">
                  <input type="checkbox" className="custom-control-input" id="terms" required />
                  <label className="custom-control-label" htmlFor="terms">I have read and agree to the website <a href="index.html">terms and conditions.</a></label>
                </div> */}
                  <div className="mb-3 form-check text-start mt-3">
  <input type="checkbox" className="form-check-input" id="exampleCheck12234" />
  <label className="form-check-label" htmlFor="exampleCheck12234">I have read and agree to the website <NavLink to="/">terms and conditions</NavLink></label>
</div>
                <button type="submit" className="check-btn sqr-btn">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
