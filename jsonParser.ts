const jsonfile = require('jsonfile')
const file = './jsonExample.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  console.dir(obj)
})

// console.dir(jsonfile.readFileSync(file))

const util = require('util')

console.log(util.inspect(jsonfile.readFileSync(file), {showHidden: false, depth: null}))