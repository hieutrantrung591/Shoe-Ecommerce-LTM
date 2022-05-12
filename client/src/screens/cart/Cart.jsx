import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import product_1 from '../../assets/image/products/nike-blazer-low-1.png'

const Cart = () => {
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
		<div className="container my-5">
			<section id="cart">
				<div className="container">
					<h2>Cart</h2>
					<div className="row">
						<div className="col-6">
							<div className="row border border-light py-3">
								<div className="col-6">
									<img src={product_1} alt="..." width="250" />
								</div>
								<div className="col-6">
									<h4>Nike Blazor Low '77</h4>
									<h5 className="product-price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2490000)}</h5>
									<h6>Color: White</h6>
									<h6>Size: 38</h6>
									<h6>Quantity: 1</h6>
								</div>
							</div>
						</div>
						<div className="col-6">
							<h4>Summary</h4>
							<div className="row">
								<div className="col-7">Sub total</div>
								<div className="col-5 text-end">
									{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2490000)}
								</div>
							</div>
							<div className="row">
								<div className="col-7">Estimated Delivery and Handling</div>
								<div className="col-5 text-end">
									{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(0)}
								</div>
							</div>
							<hr />
							<div className="row">
								<div className="col-7">Total</div>
								<div className="col-5 text-end">
									{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2490000)}
								</div>
							</div>
							<div className="d-flex flex-column my-3">
								<button className="btn my-1 btn-product btn-add-cart">Continue Shopping</button>
								<button className="btn my-1 btn-product btn-add-cart">Purchase</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="products-favorite">
				<div className="container">
					<div className="row py-3">
						<div className="col-lg-6 my-1">
							<h1 className="text-uppercase">Favorite</h1>
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
											return <div style={{ display: 'none' }}></div>
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
			<section id="products-like">
				<div className="container">
					<div className="row py-3">
						<div className="col-lg-6 my-1">
							<h1 className="text-uppercase">You might also like</h1>
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
											return <div style={{ display: 'none' }}></div>
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
		</div>
	)
}

export default Cart