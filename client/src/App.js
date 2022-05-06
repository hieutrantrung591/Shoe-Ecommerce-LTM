import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './screens/home/Home'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import Login from './screens/login/Login'
import Register from "./screens/register/Register"
import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/footer/Footer'
import Dashboard from "./components/Dashboard.js"
import Cart from './screens/cart/Cart'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/special" exact component={Contact} />
            <Route path="/sale" exact component={Projects} />
            <Route path="/men" exact component={Dashboard} />
            <Route path="/women" exact component={About} />
            <Route path="/cart" exact component={Cart} />
            <Footer />
          </>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
