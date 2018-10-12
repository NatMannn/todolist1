const express = require("express") //include
const bodyParser = require("body-parser") 
const app = express()
const port = 8000
app.use(bodyParser.json()) // middleware

// 1 / = root uri
app.get('/', (req, res) => {
    res.send('Hello !!')
})

// 2 todolist method get post
var todolist = [
    {
        id: 1 ,
        text: "Doing Homework"
    },
    {
        id: 2 ,
        text: "Drinking"
    }
]
var idCounter = todolist.length

// 3 แปลง array ขั้น2 เป็น json
app.get('/todo', (req, res) => {
    res.json(todolist)
})


app.get('/todo/:id', (req, res) => {
   var id = req.params.id
   var todo = todolist.filter(todo => todo.id == id)
   res.json(todo)
})


// app.post('/todo', (req, res) => {
//     console.log(req.body);
// })


app.post('/todo', (req, res) => {
    idCounter +=1
    todolist.push ({
        id: idCounter,
        text: req.body.text   
    })
    res.sendStatus(200)
})







app.listen(port, () => (console.log ("App listening on port " + port)))