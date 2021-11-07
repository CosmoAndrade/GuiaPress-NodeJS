const express = require('express')

const router = express.Router()

router.get('/categories',(req,res)=>{
    res.send('Rota de categorias')
})

router.get('admin/categories/new',(req,res)=>{
    res.send('Rota para criar uma nova categoria')
})

router.get('/admin/categories/new',(req,res) => {
    res.render('admin/categories/new')
})

module.exports = router;