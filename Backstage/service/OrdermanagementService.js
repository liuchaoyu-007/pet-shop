const { Ordermanagement } = require("../dao/OrdermanagementDao")
// -------获取当前门店主任人有的订单（是主人的所有的店里的所有订单总和）--------//
module.exports.Ordermanagement = async (data) => {
    return await Ordermanagement(data)
}