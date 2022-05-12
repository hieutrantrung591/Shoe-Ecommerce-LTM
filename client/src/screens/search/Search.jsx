import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

const Search = () => {
	const [products, setProducts] = useState([])
	const [images, setImages] = useState([])
	const [keyword, setKeyword] = useState('')

	useEffect(() => {
		getImages();
		searchProduct();
	}, [])

	const getImages = async () => {
		const response = await axios.get('http://localhost:8080/image/list');
		setImages(response.data.result);
	}

	const searchProduct = async () => {
		const response = await axios.post('http://localhost:8080/product/search', {
			keyword: keyword
		});
		setProducts(response.data.result);
	}

	const filtered = products.filter((value) => {
		if (keyword === '' || value.Ten.toLowerCase().includes(keyword.toLowerCase())) {
			return value;
		}
	})

	return (
		<div className="container-fluid">
			<div className="search-bar bg-light py-3">
				<div className="container">
					<form onSubmit={searchProduct}>
						<label>Product name</label>
						<input
							type="text"
							className="form-control form-control-user py-2"
							placeholder="Enter keyword"
							value={keyword}
							onChange={(event) => { setKeyword(event.target.value) }}
						/>
						<button type="submit" className="btn btn-dark btn-lg btn-block my-2">Search</button>
					</form>
				</div>
			</div>
			<div className="container">
				<div className="row pt-4">
					<h3>Found <span className="text-red">{filtered.length}</span> result(s)</h3>
				</div>
				<div className="row py-2">
					{filtered.map((product, index) => (
						<div className="col-12 col-md-4 mb-4">
							<div className="card h-100" key={product.MaSP}>
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
		</div>
	)
}

export default Search