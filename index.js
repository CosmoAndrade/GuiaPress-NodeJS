const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesController')

// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


// static
app.use(express.static('public'))

//views engine
app.set('view engine','ejs')

app.get('/',(req,res)=> {
    res.render('index')
})

// Database , conectar ao banco de dados
connection.authenticate().then(()=>{
        console.log('Conexão feita com sucesso!')
    }).catch((error)=>{
        console.log(error)
    });

app.use('/',categoriesController) 
app.use('/',articlesController)       


app.listen(4000,()=>{
    console.log('O servidor está rodando!')
    console.log('http://localhost:4000')
})

