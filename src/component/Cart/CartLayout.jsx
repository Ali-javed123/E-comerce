import React,{useState} from 'react'

export default function CartLayout() {
    let [num, setNum]= useState(0);
    let [num2, setNum2]= useState(0);
    let [num3, setNum3]= useState(0);
    let [num4, setNum4]= useState(0);

    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }  
    
    let incNum2 =()=>{
        if(num2<10)
        {
        setNum2(Number(num2)+1);
        }
      };
      let decNum2 = () => {
         if(num2>0)
         {
          setNum2(num2 - 1);
         }
      }
     let handleChange2 = (e)=>{
       setNum2(e.target.value);
      }  


      let incNum3 =()=>{
        if(num3<10)
        {
        setNum3(Number(num3)+1);
        }
      };
      let decNum3 = () => {
         if(num3>0)
         {
          setNum3(num3 - 1);
         }
      }
     let handleChange3 = (e)=>{
       setNum3(e.target.value);
      }  


      let incNum4 =()=>{
        if(num4<10)
        {
        setNum4(Number(num4)+1);
        }
      };
      let decNum4 = () => {
         if(num4>0)
         {
          setNum4(num4 - 1);
         }
      }
     let handleChange4 = (e)=>{
       setNum4(e.target.value);
      }  
  return (
<div className="cart-main-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/* Cart Table Area */}
        <div className="cart-table table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="pro-thumbnail">Thumbnail</th>
                <th className="pro-title">Product</th>
                <th className="pro-price">Price</th>
                <th className="pro-quantity">Quantity</th>
                <th className="pro-subtotal">Total</th>
                <th className="pro-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product/product-img2.jpg" alt="Product" /></a></td>
                <td className="pro-title"><a href="#">k2 snowboard 2018</a></td>
                <td className="pro-price"><span>$295.00</span></td>
                <td className="pro-quantity">
                <div className="quantity">
                    <div className='pro-qty'>

                    <span onClick={decNum} className="dec qtybtn">-</span><input type="text"  value={num} onChange={handleChange} /><span onClick={incNum} className="inc qtybtn">+</span>
                    </div>
                  </div>
                </td>
                <td className="pro-subtotal"><span>$295.00</span></td>
                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
              </tr>
              <tr>
                <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product/product-img3.jpg" alt="Product" /></a></td>
                <td className="pro-title"><a href="#">Aquet Drone D 420</a></td>
                <td className="pro-price"><span>$275.00</span></td>
                <td className="pro-quantity">
                <div className="quantity">
                    <div className='pro-qty'>

                    <span onClick={decNum2} className="dec qtybtn">-</span><input type="text"  value={num2} onChange={handleChange2} /><span onClick={incNum2} className="inc qtybtn">+</span>
                    </div>
                  </div>
                </td>
                <td className="pro-subtotal"><span>$550.00</span></td>
                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
              </tr>
              <tr>
                <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product/product-img4.jpg" alt="Product" /></a></td>
                <td className="pro-title"><a href="#">berzerker snowboard</a></td>
                <td className="pro-price"><span>$295.00</span></td>
                <td className="pro-quantity">
                <div className="quantity">
                    <div className='pro-qty'>

                    <span onClick={decNum3} className="dec qtybtn">-</span><input type="text"  value={num3} onChange={handleChange3} /><span onClick={incNum3} className="inc qtybtn">+</span>
                    </div>
                  </div>
                </td>
                <td className="pro-subtotal"><span>$295.00</span></td>
                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
              </tr>
              <tr>
                <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product/product-img5.jpg" alt="Product" /></a></td>
                <td className="pro-title"><a href="#">element snowboard</a></td>
                <td className="pro-price"><span>$110.00</span></td>
                <td className="pro-quantity">
                <div>
                    <div className='pro-qty'>

                    <span onClick={decNum4} className="dec qtybtn">-</span><input type="text"  value={num4} onChange={handleChange4} /><span onClick={incNum4} className="inc qtybtn">+</span>
                    </div>
                  </div>
                </td>
                <td className="pro-subtotal"><span>$110.00</span></td>
                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Cart Update Option */}
        <div className="cart-update-option d-block d-md-flex justify-content-between">
          <div className="apply-coupon-wrapper">
            <form action="#" method="post" className=" d-block d-md-flex">
              <input type="text" placeholder="Enter Your Coupon Code" required />
              <button className="sqr-btn">Apply Coupon</button>
            </form>
          </div>
          <div className="cart-update mt-sm-16">
            <a href="#" className="sqr-btn">Update Cart</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-5 ml-auto">
        {/* Cart Calculation Area */}
        <div className="cart-calculator-wrapper">
          <div className="cart-calculate-items">
            <h3>Cart Totals</h3>
            <div className="table-responsive">
              <table className="table">
                <tbody><tr>
                    <td>Sub Total</td>
                    <td>$230</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>$70</td>
                  </tr>
                  <tr className="total">
                    <td>Total</td>
                    <td className="total-amount">$300</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <a href="checkout.html" className="sqr-btn d-block">Proceed To Checkout</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
