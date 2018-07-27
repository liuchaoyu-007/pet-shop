const { Petowner, Petowget, Petowgetdog } = require("../dao/PetownerDao")
module.exports.Petowner = async (data) => {
    return await Petowner(data)
}
module.exports.Petowget = async (data) => {
    return await Petowget(data)
}
module.exports.Petowgetdog = async (data) => {
    return await Petowgetdog(data)
}