
const fs = require("fs")

new Promise((resolve, reject) => {
  fs.readFile("./1.js", "utf8", (err, data) => {
    resolve(JSON.parse(data))
  })
})
  .then(result => {
    return new Promise((resolve) => {
      fs.readFile("./2.js", "utf8", (err, data) => {
        resolve([...result, ...JSON.parse(data)])
      })
    })
  })
  .then(result => {
    return new Promise((resolve) => {
      fs.readFile("./3.js", "utf8", (err, data) => {
        resolve([...result, ...JSON.parse(data)])
      })
    })
  })
  .then(result => {
    return new Promise((resolve) => {
      fs.readFile("./4.js", "utf8", (err, data) => {
        resolve([...result, ...JSON.parse(data)])
      })
    })
  })
  .then(result => {
    return new Promise((resolve) => {
      fs.readFile("./5.js", "utf8", (err, data) => {
        resolve([...result, ...JSON.parse(data)])
      })
    })
  })
  .then(result => {
    fs.writeFile("./result.js", JSON.stringify(result), (err, data) => console.log(data))
  })