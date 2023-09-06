import React from 'react'

export default function ContactUsSection1() {
  return (
    <>
{/* contact area start */}
<div className="contact-area pb-34 pb-md-18 pb-sm-0">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="contact-message">
          <h2>Contact Us Form </h2>
          {/* id="contact-form" action="http://demo.hasthemes.com/galio-v6/galio/assets/php/mail.php" method="post" */}
          <form  className="contact-form">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <input name="first_name" placeholder="Name *" type="text" required />    
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <input name="phone" placeholder="Phone *" type="text" required />   
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <input name="email_address" placeholder="Email *" type="text" required />    
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <input name="contact_subject" placeholder="Subject *" type="text" />   
              </div>
              <div className="col-12">
                <div className="contact2-textarea text-center">
                  <textarea placeholder="Message *" name="message" className="form-control2" required defaultValue={""} />     
                </div>   
                <div className="contact-btn">
                  <button className="sqr-btn" type="submit">Send Message</button> 
                </div> 
              </div> 
              <div className="col-12 d-flex justify-content-center">
                <p className="form-messege" />
              </div>
            </div>
          </form>    
        </div> 
      </div>
      <div className="col-lg-6">
        <div className="contact-info mt-md-28 mt-sm-28">
          <h2>contact us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam possimus perspiciatis vel sunt rem exercitationem inventore incidunt doloremque? Similique alias incidunt, quia nostrum reiciendis expedita quibusdam sequi. Aliquid, architecto!</p>
          <ul>
            <li><i className="fa fa-fax" /> Address : 50 John Street Toronto Ontario M5V3T5,Canada</li>
            <li><i className="fa fa-fax" /> Address :122 Harold Rd, London E13 0SF, United Kingdom</li>

            <li><i className="fa fa-envelope-o" /> Creativewebsitesolutions11@Gmail.Com</li>
            <li><i className="fa fa-envelope-o" /> Info@Creativewebssolutions.Com</li>

            <li><i className="fa fa-phone" />US: +1 (281) 885-8538</li>
            <li><i className="fa fa-phone" />US: +1 (281) 985-9318</li>

            <li><i className="fa fa-phone" />UK: +44-7440-451891</li>
            <li><i className="fa fa-phone" />Canada:+1-(909)-351-3911</li>
            <li><i className="fa fa-phone" />Europe:+49-1521-6652405</li>
            <li><i className="fa fa-desktop" />www.creativewebssolutions.com</li>

          </ul>
          <div className="working-time">
            <h3>Working hours</h3>
            <p><span>Monday – Saturday:</span>08AM – 22PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* contact area end */}

    </>
  )
}
