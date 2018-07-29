const {
    Petowner,
    Petowget,
    Petowgetdog,
    Petowgetmov,
    search,
    Petowgetmovs,
    Addressadd,
    Addressget,
    Addressgetsc,
    Addressgetset,
    Addresssddmy,
    getshangping,
} = require("../dao/PetownerDao")
module.exports.getshangping = async (data) => {
    return await getshangping(data)
}
module.exports.Petowner = async (data) => {
    return await Petowner(data)
}
module.exports.Petowget = async (data) => {
    return await Petowget(data)
}
module.exports.Petowgetdog = async (data) => {
    return await Petowgetdog(data)
}
module.exports.Petowgetmov = async (data) => {
    return await Petowgetmov(data)
}
module.exports.search = async (data) => {
    return await search(data)
}
module.exports.Petowgetmovs = async (data) => {
    return await Petowgetmovs(data)
}
module.exports.Addressadd = async (data) => {
    return await Addressadd(data)
}
module.exports.Addressget = async (data) => {
    return await Addressget(data)
}
module.exports.Addressgetsc = async (data) => {
    return await Addressgetsc(data)
}
module.exports.Addressgetset = async (data) => {
    return await Addressgetset(data)
}
module.exports.Addresssddmy· = async (data) => {
    return await Addresssddmy·(data)
}