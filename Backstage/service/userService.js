const { register, Land, list, sets,set } = require("../dao/userDao")
module.exports.register = async (data) => {
    return await register(data)
}
module.exports.Land = async (data) => {
    return await Land(data)
}
module.exports.list = async (data) => {
    return await list(data)
}
module.exports.sets = async (data) => {
    return await sets(data)
}
module.exports.set = async (data) => {
    return await set(data)
}