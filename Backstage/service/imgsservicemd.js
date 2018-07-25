const { addImg } = require("../dao/imgsmdDao")

module.exports.addImg = async img => {
  return await addImg(img)
}