const mongoose = require("mongoose")
module.exports.addImg = async img => {
  // 增加图片
  const Img=await mongoose
    .model("imgsmd")
    .create(img)
    return Img.url
}