const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")

//View engine
app.set('view engine', 'ejs')

//Static
app.use(express.static('public'))

//Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//databse
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/clientes", (req, res) => {
    res.render("admin/clientes/clientes")
})

app.get("/colaboradores", (req, res) => {
    res.render("admin/colaboradores/colaboradores")
})

app.get("/chamados", (req, res) => {
    res.render("admin/chamados/chamados")
})

app.get("/orcamentos", (req, res) => {
    res.render("admin/orcamentos/orcamentos")
})

app.listen(8090, () => {
    console.log("O servidor está rodando!")
})