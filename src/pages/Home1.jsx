import React from 'react'
import Header from '../component/globleComponent/Header'
import Home1Section from '../component/Home1/Home1Section'
import Home1Section2 from '../component/Home1/Home1Section2'
import Home1Section3 from '../component/Home1/Home1Section3'
import Home1Section4 from '../component/Home1/Home1Section4'
import Home1Section5 from '../component/Home1/Home1Section5'
import Home1Section6 from '../component/Home1/Home1Section6'
import Footer from '../component/globleComponent/Footer'
import Home1Hero from '../component/Home1/Home1Hero'
export default function Home1() {
  return (
    <>
 {/* color switcher start */}
<div className="color-switcher">
  <div className="color-switcher-inner">
    <div className="switcher-icon">
      <i className="fa fa-cog fa-spin" />
    </div>
    <div className="switcher-panel-item">
      <h3>Color Schemes</h3>
      <ul className="nav flex-wrap colors">
        <li className="default active" data-color="default" data-toggle="tooltip" data-placement="top" title="Red" />
        <li className="green" data-color="green" data-toggle="tooltip" data-placement="top" title="Green" />
        <li className="soft-green" data-color="soft-green" data-toggle="tooltip" data-placement="top" title="Soft-Green" />
        <li className="sky-blue" data-color="sky-blue" data-toggle="tooltip" data-placement="top" title="Sky-Blue" />
        <li className="orange" data-color="orange" data-toggle="tooltip" data-placement="top" title="Orange" />
        <li className="violet" data-color="violet" data-toggle="tooltip" data-placement="top" title="Violet" />
      </ul>
    </div>
    <div className="switcher-panel-item">
      <h3>Layout Style</h3>
      <ul className="nav layout-changer">
        <li><button className="btn-layout-changer active" data-layout="wide">Wide</button></li>
        <li><button className="btn-layout-changer" data-layout="boxed">Boxed</button></li>
      </ul>
    </div>
    <div className="switcher-panel-item bg">
      <h3>Background Pattern</h3>
      <ul className="nav flex-wrap bgbody-style bg-pattern">
        <li><img src="assets/img/bg-panel/bg-pettern/1.png" alt="Pettern" /></li>
        <li><img src="assets/img/bg-panel/bg-pettern/2.png" alt="Pettern" /></li>
        <li><img src="assets/img/bg-panel/bg-pettern/3.png" alt="Pettern" /></li>
        <li><img src="assets/img/bg-panel/bg-pettern/4.png" alt="Pettern" /></li>
        <li><img src="assets/img/bg-panel/bg-pettern/5.png" alt="Pettern" /></li>
        <li><img src="assets/img/bg-panel/bg-pettern/6.png" alt="Pettern" /></li>
      </ul>
    </div>
    <div className="switcher-panel-item bg">
      <h3>Background Image</h3>
      <ul className="nav flex-wrap bgbody-style bg-img">
        <li><img src="assets/img/bg-panel/bg-img/01.jpg" alt="Images" /></li>
        <li><img src="assets/img/bg-panel/bg-img/02.jpg" alt="Images" /></li>
        <li><img src="assets/img/bg-panel/bg-img/03.jpg" alt="Images" /></li>
        <li><img src="assets/img/bg-panel/bg-img/04.jpg" alt="Images" /></li>
        <li><img src="assets/img/bg-panel/bg-img/05.jpg" alt="Images" /></li>
        <li><img src="assets/img/bg-panel/bg-img/06.jpg" alt="Images" /></li>
      </ul>
    </div>
  </div>
</div>
{/* color switcher end */}

      <div class="wrapper">
      <Header/>
      <Home1Hero/>
      <Home1Section/>
      {/* <Home1Section2/> */}
      <Home1Section3/>
      <Home1Section4/>
      {/* <Home1Section5/> */}
      {/* <Home1Section6/> */}
      <Footer/>
      </div>
{/* Scroll to top start */}
<div className="scroll-top not-visible">
  <i className="fa fa-angle-up" />
</div>
{/* Scroll to Top End */}

    </>
  )
}
