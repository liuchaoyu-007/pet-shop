const{Commodity} = require("../dao/CommodityDao")

module.exports.Commodity = async (data) => {
    return await Commodity(data)
}    