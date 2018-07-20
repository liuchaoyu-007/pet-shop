const fs = require("fs")

let arr = []

fs.readFile("./1.js", "utf8", (err, data) => {
  arr = [...arr, ...JSON.parse(data)]
  fs.readFile("./2.js", "utf8", (err, data) => {
    arr = [...arr, ...JSON.parse(data)]
    fs.readFile("./3.js", "utf8", (err, data) => {
      arr = [...arr, ...JSON.parse(data)]
      fs.readFile("./4.js", "utf8", (err, data) => {
        arr = [...arr, ...JSON.parse(data)]
        fs.readFile("./5.js", "utf8", (err, data) => {
          arr = [...arr, ...JSON.parse(data)]
          fs.writeFile("./result.js", JSON.stringify(arr), (err, data) => console.log(data))
        })
      })
    })
  })
})