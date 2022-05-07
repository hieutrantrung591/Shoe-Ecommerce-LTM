import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'

const customerTableHead = [
	'#',
	'Name',
	'Address',
	'Phone'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
	<tr key={index}>
		<td>{item.MaKH}</td>
		<td>{item.DiaChi}</td>
		<td>{item.SDT}</td>
		<td>{item.MaNV}</td>
	</tr>
)

const Customers = () => {
	const [customers, setCustomers] = useState([])

	useEffect(() => {
    getCustomers();
  }, [])

	const getCustomers = async () => {
		const response = await axios.get(`http://localhost:8080/customer/list`)
		setCustomers(response.data.result)
		console.log(response.data.result)
		console.log(customerList)
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
							<Table
								limit='10'
								headData={customerTableHead}
								renderHead={(item, index) => renderHead(item, index)}
								bodyData={customers}
								renderBody={(item, index) => renderBody(item, index)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Customers
