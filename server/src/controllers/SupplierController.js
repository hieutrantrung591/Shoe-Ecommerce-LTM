// var db = require('../models/index');

// let getAllSuppliers = async (req, res, next) => {
//     try {
//         const suppliers = await db.Suppliers.findAll({
//             attributes: ['id', 'name', 'address', 'phone', 'representative']
//         });
//         res.send(suppliers);
//         next();
//     } catch(error) {
//         console.log(error);
//     }
// }

// module.exports = {
//     getAllSuppliers: getAllSuppliers
// }