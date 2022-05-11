import React, { useCallback, useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from "axios"
import './Product.css'
import QuantityPicker from './QuantityPicker'

const Product = () => {
	const [product, setProduct] = useState({});
	const [images, setImages] = useState([]);
	const history = useHistory();

	const params = useParams();

	const getProduct = useCallback(async () => {
		const response = await axios.get(`http://localhost:8080/product/detail/${params.id}`);
		setProduct(response.data.result);
	}, [params.id]);

	const getImages = useCallback(async () => {
		const response = await axios.get(`http://localhost:8080/image/product/${params.id}`);
		setImages(response.data.result);
	}, [params.id]);

	useEffect(() => {
		getProduct();
		getImages();
	}, [getProduct, getImages]);

	const addToCart = () => {
		history.push('/cart');
	}

	return (
		<div className="container my-5">
			<div className="row">
				<div className="col-7">
					<div className="product-images">
						{images.map((image, index) => {
							return <img src={image.DiaChi} alt="..." className="image" key={image.MaAnh} />
						})}
					</div>
				</div>
				<div className="col-5">
					<h2 className="product-name">{product.Ten}</h2>
					<h5 className="product-price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.DonGia)}</h5>
					<hr/>
					<span>Select size</span>
					<ul className="product-sizes">
						<li>36</li>
						<li>36.5</li>
						<li>37</li>
						<li>38</li>
						<li>38.5</li>
						<li>39</li>
						<li>40</li>
					</ul>
					<hr/>
					<div>
						<span>Quantity</span>
						<QuantityPicker min={1} max={120} />
					</div>
					<hr/>
					<div className="d-flex flex-column my-3">
						<button onClick={addToCart}  className="btn my-1 btn-product btn-add-cart">Add To Cart</button>
						<button className="btn btn-outline-dark my-1 btn-product bth-favorite">Favorite</button>
					</div>
					<hr/>
					<div>
						<p>{product.MoTa}</p>
					</div>
					<hr/>
					<div>
						<h5>Reviews (0)</h5>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product