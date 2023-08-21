import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home1 from './pages/Home1';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function App() {
  return (
    <div className="App">
 <Router>
        <Routes>
          {/* >>>>Superadmin panel>>>>> */}
        <Route exact path="/" element={< Home1/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
