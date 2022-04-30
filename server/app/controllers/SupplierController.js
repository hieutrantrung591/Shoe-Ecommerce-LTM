import Suppliers from "../models/SupplierModel.js";

export const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Suppliers.findAll({
            attributes: ['id', 'name', 'address', 'phone', 'representative']
        });
        res.json(suppliers);
    } catch(error) {
        console.log(error);
    }
}