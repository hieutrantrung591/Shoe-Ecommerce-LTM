var db = require("../models/index.js");

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                attributes: ['id', 'name']
            });
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllUser: getAllUser
}