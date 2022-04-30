import Employee from "../models/EmployeeModel.js";
 
export const getAllEmployees = async(req, res) => {
    try {
        const employees = await Employee.findAll({
            attributes:['id','name']
        });
        res.json(employees);
    } catch (error) {
        console.log(error);
    }
}