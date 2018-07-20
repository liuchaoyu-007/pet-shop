const fs = require("fs")
//方法fs

async function gen() {
  const data1 = await new Promise((resolve, reject) => {
    fs.readFile("./1.js", "utf8", (err, data) => {
      resolve(JSON.parse(data))
    })
  })

  const data2 = await new Promise((resolve, reject) => {
    fs.readFile("./2.js", "utf8", (err, data) => {
      resolve([...data1, ...JSON.parse(data)])
    })
  })

  const data3 = await new Promise((resolve, reject) => {
    fs.readFile("./3.js", "utf8", (err, data) => {
      resolve([...data2, ...JSON.parse(data)])
    })
  })

  const data4 = await new Promise((resolve, reject) => {
    fs.readFile("./4.js", "utf8", (err, data) => {
      resolve([...data3, ...JSON.parse(data)])
    })
  })

  const data5 = await new Promise((resolve, reject) => {
    fs.readFile("./5.js", "utf8", (err, data) => {
      resolve([...data4, ...JSON.parse(data)])
    })
  })

  fs.writeFile("./result.js", JSON.stringify(data5), (err, data) => console.log(data))
}

gen();