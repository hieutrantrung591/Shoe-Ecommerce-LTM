// var db = require('../models/index');
 
// let getAllCategories = async(req, res, next) => {
//     try {
//         const categories = await db.Category.findAll({
//             attributes:['id','name']
//         });
//         res.send(categories);
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }

// let getCategoryById = async(req, res, next) => {
//     try {
//         const category = await db.Category.findOne({
//             attributes:['id','name'],
//             where: { id: req.params.id },
//         });
//         res.send(category);
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = {
//     getAllCategories: getAllCategories,
//     getCategoryById: getCategoryById
// }