const mongoose = require("mongoose")
const fs = require("fs")

module.exports.addImg = async img => {
  await mongoose.model("imgs").create(img)
  let url = img.url
  await mongoose.model("Commodity").create({
    goodsDate: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddawdd",
    goodsName: "",
    goodsType: "",
    goodsRegion: "",
    goodsSpecial: "",
    goodsTime: "",
    goodsPrice: "",
    goodsTaste: "",
    goodsSize: "",
    goodsCanFor: "",
    goodsImg: url,
  })
  // await mongoose.model("imgs")
  //     .update({
  //       _id:movieId
  //     },{
  //       $push:{
  //         imgs:imgId
  //       }
  //     })
}

// module.exports.addImg = async img => {
//   // 增加图片
//   return await mongoose
//     .model("imgs")
//     .create(img)
// }

module.exports.getImgsByPage = async ({
  movieId,
  page,
  rows
}) => {
  const data = {};
  page = parseInt(page)
  rows = parseInt(rows)
  const imgsModel = mongoose.model("imgs")
  data.total = await imgsModel.count()
  data.rows = await imgsModel
    .find({
      movieId
    })
    .sort({
      _id: -1
    })
    .skip((page - 1) * rows)
    .limit(rows)
    .exec();
  return data;
}
module.exports.movieimg = async img => {
  //删除图片
  const data = await mongoose
    .model("imgs")
    .find(img)
  let {
    url
  } = data[0]
  let {
    unlink
  } = fs
  await unlink("public" + url)
  await mongoose
    .model("imgs")
    .remove(img)
  return unlink
}