import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/NavBar';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {


  return (
    <>
            <Router>
            <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contact-us" element={<Contact/>} />
            <Route exact path="/about-us" element={<About/>} />
          </Routes>
        </Router>
    </>
  )
}

export default App
