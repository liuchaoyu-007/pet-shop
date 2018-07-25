const { add, get,remove,modify } = require("../dao/storeDao")

module.exports.add = async (data) => {
    return await add(data)
}
module.exports.get = async (data) => {
    return await get(data)
}
module.exports.remove = async (data) => {
    return await remove(data)
}
module.exports.modify = async (data) => {
    return await modify(data)
}