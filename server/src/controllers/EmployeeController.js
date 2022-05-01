// var db = require('../models/index');
 
// let getAllEmployees = async(req, res, next) => {
//     try {
//         const employees = await db.Employee.findAll({
//             attributes:['id','name']
//         });
//         res.send(employees);
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = {
//     getAllEmployees: getAllEmployees,
// }