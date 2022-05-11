import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import './Home.css'
import image_1 from '../../assets/image/home/home-1.png'
import image_2 from '../../assets/image/home/home-2.png'
import image_3 from '../../assets/image/home/home-3.png'
import image_4 from '../../assets/image/home/home-4.png'
import image_5 from '../../assets/image/home/home-5.png'
import image_6 from '../../assets/image/home/home-6.png'

const Home = () => {
  const [products, setProducts] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    getProducts();
    getImages();
  }, [])

  const getProducts = async () => {
    const response = await axios.get('http://localhost:8080/product/list');
    setProducts(response.data.result);
  }

  const getImages = async () => {
    const response = await axios.get('http://localhost:8080/image/list');
    setImages(response.data.result);
  }

  return (
    <div className="flex-grow-1">
      <div className="py-3 text-center bg-light">
        <h3>SALE UP TO 40%</h3>
        <span>Shop all the items</span>
      </div>

      <section id="banner-1">
        <div>
          <img src={image_1} className="w-100" alt="home 1" />
        </div>
      </section>

      <section id="products-1">
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
            {products.map((product, index) => (
              <div className="col-12 col-md-4 mb-4" key={product.MaSP}>
                <div className="card h-100">
                  {images.map((image, index) => {
                    if (image.IsThumbnail === 1 && image.MaSP === product.MaSP) {
                      return (
                        <Link to={`/product/${product.MaSP}`} key={image.MaAnh}>
                          <img src={image.DiaChi} className="card-img-top product-thumbnail" alt="..." />
                        </Link>
                      )
                    } else {
                      return <div style={{display: 'none'}}></div>
                    }
                  })}

                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <li className="text-muted text-right product-price">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.DonGia)}
                      </li>
                    </ul>
                    <div className="product-name my-2">
                      <Link to={`/product/${product.MaSP}`} className="h2 text-decoration-none text-dark">
                        {product.Ten}
                      </Link>
                    </div>
                    <p className="card-text">{product.MoTa}</p>
                    <p className="text-muted">Reviews (24)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="banner-2">
        <div>
          <img src={image_2} className="w-100" alt="home 2" />
        </div>
      </section>

      <section id="products-2">
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
            {products.map((product, index) => (
              <div className="col-12 col-md-4 mb-4" key={product.MaSP}>
                <div className="card h-100">
                  {images.map((image, index) => {
                    if (image.IsThumbnail === 1 && image.MaSP === product.MaSP) {
                      return (
                        <Link to={`/product/${product.MaSP}`} key={image.MaAnh}>
                          <img src={image.DiaChi} className="card-img-top product-thumbnail" alt="..." />
                        </Link>
                      )
                    } else {
                      return <div style={{display: 'none'}}></div>
                    }
                  })}

                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <li className="text-muted text-right product-price">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.DonGia)}
                      </li>
                    </ul>
                    <div className="product-name my-2">
                      <Link to={`/product/${product.MaSP}`} className="h2 text-decoration-none text-dark">
                        {product.Ten}
                      </Link>
                    </div>
                    <p className="card-text">{product.MoTa}</p>
                    <p className="text-muted">Reviews (24)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="banner-3">
        <div>
          <img src={image_3} className="w-100" alt="home 3" />
        </div>
      </section>

      <section id="category">
        <div className="container py-5">
          <h3>TRENDING</h3>
          <div className="row">
            <div className="col-6">
              <Link to="/shop/men">
                <img src={image_4} alt="home 4" width="600" />
              </Link>
            </div>
            <div className="col-6">
              <Link to="/shop/women">
                <div className="col-6">
                  <img src={image_5} alt="home 5" width="600" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="banner-4">
        <div>
          <img src={image_6} className="w-100" alt="home 6" />
        </div>
      </section>
    </div>
  )
}

export default Home