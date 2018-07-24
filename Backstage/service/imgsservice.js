const { addImg, getImgsByPage,movieimg } = require("../dao/imgsDao.js")

module.exports.addImg = async img => {
  return await addImg(img)
}

module.exports.getImgsByPage = async img => {
  return await getImgsByPage(img)
}
module.exports.movieimg = async img => {
  return await movieimg(img)
}