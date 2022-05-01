// var db = require('../models/index');
 
// let getAllProducts = async(req, res, next) => {
//     try {
//         const products = await db.Product.findAll({
//             attributes:['id','name']
//         });
//         res.json(products);
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }

// let getProductById = async(req, res, next) => {
//     try {
//         const product = await db.Product.findOne({
//             where: { id: req.params.id },
//             include:[
//                 {
//                     model: db.Category
//                 }
//             ]
//         });
//         res.send(product);
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = {
//     getProductById: getProductById,
//     getAllProducts: getAllProducts
// }
