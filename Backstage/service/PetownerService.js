const { Petowner,Petowget } = require("../dao/PetownerDao")
module.exports.Petowner = async (data) => {
    return await Petowner(data)
}
module.exports.Petowget = async (data) => {
    return await Petowget(data)
}