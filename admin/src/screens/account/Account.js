import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        const response = await axios.get('http://localhost:8080/employees');
        setEmployees(response.data)
    }

  return(
    <div className="container p-5">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">Position</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr key={employee.id}>
                        <td scope="row">{index + 1}</td>
                        <td>{employee.name}</td>
                        <td>{employee.dob}</td>
                        <td>{employee.address}</td>
                        <td>{employee.email}</td>
                        <td>{employee.position}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Home;