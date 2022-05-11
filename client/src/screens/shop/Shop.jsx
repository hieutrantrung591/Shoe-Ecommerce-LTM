import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Shop.css'
import axios from "axios"

const Shop = () => {
	const [products, setProducts] = useState([])
	const [images, setImages] = useState([])

	const params = useParams()

	const getProducts = async () => {
		const response = await axios.get('http://localhost:8080/product/list');
		setProducts(response.data.result);
	}

	const getImages = async () => {
		const response = await axios.get('http://localhost:8080/image/list');
		setImages(response.data.result);
	}

	useEffect(() => {
		getProducts();
		getImages();
	}, [])

	return (
		<div className="container my-4">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="/">Home</Link></li>
					<li className="breadcrumb-item">Category</li>
					<li className="breadcrumb-item active" aria-current="page">{params.id}</li>
				</ol>
			</nav>

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
	)
}

export default Shop;