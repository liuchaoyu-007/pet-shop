const{Commodity,getCinemaPage} = require("../dao/CommodityDao")

module.exports.Commodity = async (data) => {//添加
    return await Commodity(data)
}

module.exports.getCinemaPage = async studio => {     //
    return await getCinemaPage(studio)  //studio是表现层传过来的req.body数据  
 }