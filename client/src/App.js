import './App.css';
import Home from './screens/home/Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './screens/login/Login';
import WithoutNav from './components/layouts/WithoutNav';
import WithNav from './components/layouts/WithNav';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<WithNav />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
