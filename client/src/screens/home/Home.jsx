import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import image_1 from '../../assets/image/home/home-1.png'
import image_2 from '../../assets/image/home/home-2.png'
import image_3 from '../../assets/image/home/home-3.png'
import image_4 from '../../assets/image/home/home-4.png'
import image_5 from '../../assets/image/home/home-5.png'
import image_6 from '../../assets/image/home/home-6.png'
import product_1 from '../../assets/image/products/nike-blazer-low-1.png'
import product_2 from '../../assets/image/products/nike-blazer-low-pro.png'
import product_3 from '../../assets/image/products/nike-blazor-vintage.png'

const Home = () => {
  return (
    <div className="flex-grow-1">
      <div className="py-3 text-center bg-light">
        <h3>SALE UP TO 40%</h3>
        <span>Shop all the items</span>
      </div>

      <section>
        <div>
          <img src={image_1} className="w-100" alt="home 1" />
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="text-uppercase">Blazer Collection</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img src={product_1} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$240.00</li>
                  </ul>
                  <a href="shop-single.html" className="h2 product-name text-decoration-none text-dark">Nike Blazer Low 77'</a>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                  </p>
                  <p className="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img src={product_2} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$480.00</li>
                  </ul>
                  <a href="shop-single.html" className="h2 product-name text-decoration-none text-dark">Nike Blazer Low Pro GT</a>
                  <p className="card-text">
                    Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                  </p>
                  <p className="text-muted">Reviews (48)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img src={product_3} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$360.00</li>
                  </ul>
                  <a href="shop-single.html" className="h2 product-name text-decoration-none text-dark">Nike SB Zoom Mid Vintage</a>
                  <p className="card-text">
                    Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                  </p>
                  <p className="text-muted">Reviews (74)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <img src={image_2} className="w-100" alt="home 2" />
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="text-uppercase">Explore Classic</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img src={product_1} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$240.00</li>
                  </ul>
                  <a href="shop-single.html" className="h2 product-name text-decoration-none text-dark">Nike Blazer Low 77'</a>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                  </p>
                  <p className="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img src={product_2} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$480.00</li>
                  </ul>
                  <a href="shop-single.html" className="h2 product-name text-decoration-none text-dark">Nike Blazer Low Pro GT</a>
                  <p className="card-text">
                    Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                  </p>
                  <p className="text-muted">Reviews (48)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <Link to="/">
                  <img src={product_3} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$360.00</li>
                  </ul>
                  <a href="shop-single.html" className="h2 product-name text-decoration-none text-dark">Nike SB Zoom Mid Vintage</a>
                  <p className="card-text">
                    Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                  </p>
                  <p className="text-muted">Reviews (74)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <img src={image_3} className="w-100" alt="home 3" />
        </div>
      </section>

      <section>
        <div className="container py-5">
          <h3>TRENDING</h3>
          <div className="row">
            <div className="col-6">
              <Link to="/men">
                <img src={image_4} alt="home 4" width="600" />
              </Link>
            </div>
            <div className="col-6">
              <Link to="/women">
                <div className="col-6">
                  <img src={image_5} alt="home 5" width="600" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <img src={image_6} className="w-100" alt="home 6" />
        </div>
      </section>
    </div>
  )
}

export default Home