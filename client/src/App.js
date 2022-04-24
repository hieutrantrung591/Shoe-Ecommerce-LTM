import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes><Route path="/" element={<Home />} /></Routes>      
      <Routes><Route path="/about" element={<About />} /></Routes>
      <Routes><Route path="/contact" element={<Contact />} /></Routes>
      <Routes><Route path="/projects" element={<Projects />} /></Routes>
    </div>
  );
}

export default App;
