import './App.css';
import Home from './screens/home/Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/login/Login';
import Register from "./screens/register/Register";
import WithoutNav from './components/layouts/WithoutNav';
import WithNav from './components/layouts/WithNav';
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
