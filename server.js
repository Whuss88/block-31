// TODO: this file :)
const express = require("express")
const app = express()

const PORT = 3000

const employees = require("./employees")

app.get("/", (req, res) => {
  res.send("hello employees!")
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

app.get("/employees", (req, res) => {
  res.json(employees)
})

app.get("/employees/random", (req, res) => {
  // res.send("random")
  if (employees.length === 0) {
    res.status(404).send("No employees available")
  } else {
    const randomIndex = Math.floor(Math.random() * employees.length)
    const randomEmployee = employees[randomIndex]
    res.json(randomEmployee)
  }
})

app.get("/employees/:index", (req, res) => {
  const {index} = req.params
  if (index < 0 || index >= employees.length) {
  res.status(404).send("employee not found")
  } else { res.json(employees[index])}
})

