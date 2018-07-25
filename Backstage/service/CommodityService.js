const{Commodity,getCinemaPage,moveCinema,alterCinema} = require("../dao/CommodityDao")

module.exports.Commodity = async (data) => {//添加
    return await Commodity(data)
}

module.exports.getCinemaPage = async studio => {     //
    return await getCinemaPage(studio)  //studio是表现层传过来的req.body数据  
 }

 module.exports.moveCinema = async studio => {     //删除
    return await moveCinema(studio)  //studio是表现层传过来的req.body数据  
 }

 module.exports.alterCinema = async studio => {     //修改
    return await alterCinema(studio)  //studio是表现层传过来的req.body数据  
 }