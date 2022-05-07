import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './screens/home/Home'
import Product from './screens/product/Product'
import Shop from './screens/shop/Shop'
import Login from './screens/login/Login'
import Register from "./screens/register/Register"
import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/footer/Footer'
import Cart from './screens/cart/Cart'
import ScrollToTop from "./components/wrapper/ScrollToTop";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <>
              <Navbar />
              <Route path="/" exact component={Home} />
              <Route path="/product/:id" component={Product} />
              <Route path="/shop/:id" component={Shop} />
              <Route path="/cart" exact component={Cart} />
              <Footer />
            </>
          </Switch>
        </ScrollToTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
