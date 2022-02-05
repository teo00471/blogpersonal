const express = require('express');

const app = express()

const port = 3000


app.get('/', (req, res)=>{
    res.send('Hola, morcho')
})

app.get('/api', (req, res)=>{
    res.send('Hola, gay')
})

app.get('/insertar',(req,res)=>{
    res.send('Esta api, nos permite insertar datos.')
})


app.listen(port, ()=> {
    console.log(`Api corriendo en el puerto ${port}`)
})