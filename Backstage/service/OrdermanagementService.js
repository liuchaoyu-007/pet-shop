const { Ordermanagement, Ordermanagementtype, add, hot, sc } = require("../dao/OrdermanagementDao")
// -------获取当前门店主任人有的订单（是主人的所有的店里的所有订单总和）--------//
module.exports.Ordermanagement = async (data) => {
    return await Ordermanagement(data)
}
module.exports.Ordermanagementtype = async (data) => {
    return await Ordermanagementtype(data)
}
module.exports.add = async (data) => {
    return await add(data)
}
module.exports.hot = async (data) => {
    return await hot(data)
}
module.exports.sc = async (data) => {
    return await sc(data)
}