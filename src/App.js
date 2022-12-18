import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
