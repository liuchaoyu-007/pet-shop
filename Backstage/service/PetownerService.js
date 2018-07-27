const { Petowner, Petowget, Petowgetdog, Petowgetmov } = require("../dao/PetownerDao")
module.exports.Petowner = async (data) => {
    return await Petowner(data)
}
module.exports.Petowget = async (data) => {
    return await Petowget(data)
}
module.exports.Petowgetdog = async (data) => {
    return await Petowgetdog(data)
}
module.exports.Petowgetmov = async (data) => {
    return await Petowgetmov(data)
}