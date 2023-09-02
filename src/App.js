import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import ShopGirdLeftSidebar from './pages/ShopGirdLeftSidebar';
import ShopGirdRightSidebar from './pages/ShopGirdRightSidebar';
import ShopGirdFull3Col from './pages/ShopGirdFull3Col';
import ShopGirdFullCol4 from './pages/ShopGirdFullCol4';
import ProductDetail from './pages/ProductDetail';
import ProductDetailVariable from './pages/ProductDetailVariable';
import ProductDetailAffiliate from './pages/ProductDetailAffiliate';
import ProductDetailGroup from './pages/ProductDetailGroup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Compare from './pages/Compare';
import Whislist from './pages/Whislist';
import MyAcccount from './pages/MyAccount';
import LoginRegister from './pages/LoginRegister';
function App() {
  return (
    <div className="App">
 <Router>''
        <Routes>
          {/* >>>>Superadmin panel>>>>> */}
        <Route exact path="/" element={< Home1/>}></Route>
        <Route exact path="/home2" element={< Home2/>}></Route>
        <Route exact path="/home3" element={< Home3/>}></Route>
        <Route exact path="/home4" element={< Home4/>}></Route>
        <Route exact path="/ShopGirdLeftSidebar" element={< ShopGirdLeftSidebar/>}></Route>
        <Route exact path="/ShopGirdRightSidebar" element={< ShopGirdRightSidebar/>}></Route>
        <Route exact path="/ShopGirdFullCol3" element={< ShopGirdFull3Col/>}></Route>
        <Route exact path="/ShopGirdFullCol4" element={<  ShopGirdFullCol4/>}></Route>
        <Route exact path="/ProductDetail" element={<  ProductDetail/>}></Route>
        <Route exact path="/product-details-affiliate" element={<  ProductDetailAffiliate/>}></Route>
        <Route exact path="/product-details-variable" element={<  ProductDetailVariable/>}></Route>
        <Route exact path="/ProductDetailGroup" element={<  ProductDetailGroup/>}></Route>
        <Route exact path="/Cart" element={<  Cart/>}></Route>
        <Route exact path="/Checkout" element={< Checkout/>}></Route>
        <Route exact path="/Compare" element={< Compare/>}></Route>
        <Route exact path="/Whislist" element={< Whislist/>}></Route>
        <Route exact path="/MyAcccount" element={<  MyAcccount/>}></Route>
        <Route exact path="/LoginRegister" element={< LoginRegister/>}></Route>

   
       

        
        
        
       
        

        
        </Routes>
        </Router>
    </div>
  );
}

export default App;
