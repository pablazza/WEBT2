import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import Inclusion from "./screens/Inclusion";
import Wcag from "./screens/WCAG";
import Senadis from "./screens/SENADIS";
import Info from "./screens/Info";
import Contact from "./screens/Contact";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/inclusion" element={<Inclusion/>} />
          <Route path="/wcag" element={<Wcag/>} />
          <Route path="/senadis" element={<Senadis/>} />
          <Route path="/info" element={<Info/>} /> 
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;