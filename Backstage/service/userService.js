const { register, Land } = require("../dao/userDao")
module.exports.register = async (data) => {
    return await register(data)
}
module.exports.Land = async (data) => {
    return await Land(data)
}