import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/NavBar';

function App() {


  return (
    <>
            <Router>
            <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </Router>
    </>
  )
}

export default App
