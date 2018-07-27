const { Petowner, Petowget, Petowgetdog, Petowgetmov, search, Petowgetmovs } = require("../dao/PetownerDao")
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
module.exports.search = async (data) => {
    return await search(data)
}
module.exports.Petowgetmovs = async (data) => {
    return await Petowgetmovs(data)
}