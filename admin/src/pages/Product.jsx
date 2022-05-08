import React, { useState, useEffect } from 'react'
import axios from "axios"
import Table from '../components/table/Table'

import manager_sale from '../assets/JsonData/manager_sale.json'

const managerSale = [

	'name',
	'quantity',
	'money'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
	<tr key={index}>

		<td>{item.Name}</td>
		<td>{item.Quantity}</td>
		<td>{item.Money}</td>

	</tr>
)

const Product = () => {
	const [products, setProducts] = useState([]);
	const [brands, setBrands] = useState([]);
	const [categories, setCategories] = useState([]);
	const [suppliers, setSuppliers] = useState([]);

	useEffect(() => {
		getProducts();
		getBrands();
		getCategories();
		getSuppliers();
	}, [])

	const getProducts = async () => {
		const response = await axios.get(`http://localhost:8080/product/list`);
		setProducts(response.data.result);
	}

	const getBrands = async () => {
		const response = await axios.get(`http://localhost:8080/brand/list`);
		setBrands(response.data.result);
	}

	const getCategories = async () => {
		const response = await axios.get(`http://localhost:8080/category/list`);
		setCategories(response.data.result);
	}

	const getSuppliers = async () => {
		const response = await axios.get(`http://localhost:8080/supplier/list`);
		setSuppliers(response.data.result);
	}

	return (
		<div>
			<h2 className="page-header">
				Products
			</h2>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card__body">
							<table className="table is-striped is-fullwidth">
								<thead>
									<tr>
										<th>No</th>
										<th>Name</th>
										<th>Price</th>
										<th>Brand</th>
										<th>Category</th>
										<th>Supplier</th>
									</tr>
								</thead>
								<tbody>
									{products.map((product, index) => (
										<tr key={product.MaSP}>
											<td>{index + 1}</td>
											<td>{product.Ten}</td>
											<td>{product.DonGia}</td>
											{brands.map((brand, index) => {
												if (brand.MaTH === product.MaTH) {
													return (<td key={brand.MaTH}>{brand.Ten}</td>)
												}
											})}
											{categories.map((category, index) => {
												if (category.MaDM === product.MaDM) {
													return (<td key={category.MaDM}>{category.Ten}</td>)
												}
											})}
											{suppliers.map((supplier, index) => {
												if (supplier.MaNCC === product.MaNCC) {
													return (<td key={supplier.MaNCC}>{supplier.Ten}</td>)
												}
											})}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
