import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/Home';
import Account from './screens/account/Account';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
