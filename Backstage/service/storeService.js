const { add } = require("../dao/storeDao")

module.exports.add = async (data) => {
    return await add(data)
}