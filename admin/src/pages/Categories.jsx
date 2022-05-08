import React, { useCallback, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		getCategories();
		getEmployees();
	}, [])

	const getCategories = async () => {
		const response = await axios.get(`http://localhost:8080/category/list`)
		setCategories(response.data.result)
		console.log(response.data.result)
	}

	const getEmployees = async () => {
		const response = await axios.get(`http://localhost:8080/employee/list`)
		setEmployees(response.data.result)
		console.log(response.data.result)
	}

	return (
		<div>
			<h2 className="page-header">
				Categories
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
										<th>Created By</th>
									</tr>
								</thead>
								<tbody>
									{categories.map((category, index) => (
										<tr key={category.MaDM}>
											<td>{index + 1}</td>
											<td>{category.Ten}</td>
											{employees.map((employee, index) => {
												if (employee.MaNV === category.MaNV) {
													return (<td key={employee.MaNV}>{employee.HoTen}</td>)
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

export default Categories
