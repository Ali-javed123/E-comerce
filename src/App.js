import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function App() {
  return (
    <div className="App">
 <Router>
        <Routes>
          {/* >>>>Superadmin panel>>>>> */}
        <Route exact path="/" element={< Home1/>}></Route>
        <Route exact path="/home2" element={< Home2/>}></Route>

        </Routes>
        </Router>
    </div>
  );
}

export default App;
