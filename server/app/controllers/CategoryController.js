import Category from "../models/CategoryModel.js";
 
export const getAllCategories = async(req, res) => {
    try {
        const categories = await Category.findAll({
            attributes:['id','name']
        });
        res.json(categories);
    } catch (error) {
        console.log(error);
    }
}