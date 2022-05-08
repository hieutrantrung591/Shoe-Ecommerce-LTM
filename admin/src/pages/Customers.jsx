import React, { useState, useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios"

const Customers = () => {
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		getCustomers();
	}, [])

	const getCustomers = async () => {
		const response = await axios.get(`http://localhost:8080/customer/list`)
		setCustomers(response.data.result)
	}

	return (
		<div>
			<h2 className="page-header">
				Customers
			</h2>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card__body">
							<table className="table">
								<thead>
									<tr>
										<th>No</th>
										<th>Name</th>
										<th>Address</th>
										<th>Phone</th>
									</tr>
								</thead>
								<tbody>
									{customers.map((customer, index) => (
										<tr key={customer.MaKH}>
											<td>{index + 1}</td>
											<td>{customer.HoTen}</td>
											<td>{customer.DiaChi}</td>
											<td>{customer.SDT}</td>
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

export default Customers
