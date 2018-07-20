const fs = require("fs")

function* gen() {
  const data1 = yield new Promise((resolve, reject) => {
    fs.readFile("./1.js", "utf8", (err, data) => {
      resolve(JSON.parse(data))
    })
  })

  const data2 = yield new Promise((resolve, reject) => {
    fs.readFile("./2.js", "utf8", (err, data) => {
      resolve([...data1, ...JSON.parse(data)])
    })
  })

  const data3 = yield new Promise((resolve, reject) => {
    fs.readFile("./3.js", "utf8", (err, data) => {
      resolve([...data2, ...JSON.parse(data)])
    })
  })

  const data4 = yield new Promise((resolve, reject) => {
    fs.readFile("./4.js", "utf8", (err, data) => {
      resolve([...data3, ...JSON.parse(data)])
    })
  })

  const data5 = yield new Promise((resolve, reject) => {
    fs.readFile("./5.js", "utf8", (err, data) => {
      resolve([...data4, ...JSON.parse(data)])
    })
  })

  fs.writeFile("./result.js", JSON.stringify(data5), (err, data) => console.log(data))
}

const it = gen()

run(it)


function run(it, data) {
  const { value, done } = it.next(data)
  if (done) {
    return value;
  }

  if (value instanceof Promise) {
    value.then(data => run(it, data))
  } else {
    run(it, value)
  }
}





// it
//   .next()
//   .value
//   .then(data => {
//     it
//       .next(data)
//       .value
//       .then(data => {
//         it
//           .next(data)
//           .value
//           .then(data => {
//             it
//               .next(data)
//               .value
//               .then(data => {
//                 it
//                   .next(data)
//                   .value
//                   .then(data => {
//                     console.log(data)
//                   })
//               })
//           })
//       })
//   })