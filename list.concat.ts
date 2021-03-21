
var jsonfile = require('jsonfile')
var file = './expenseResult.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  console.dir(obj.data.expenses)

  let expenses
  let rows = []
  for (let i = 0; i < 5; i++) {
    expenses = obj.data.expenses
    rows = rows.concat(expenses.objects)
  }
  console.log(JSON.stringify(rows, null, 2))

  expenses.objects = rows
  console.dir(obj.data.expenses.objects)
})