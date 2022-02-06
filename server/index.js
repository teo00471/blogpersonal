const { response } = require('express');

const express = require('express');

var mysql = require('mysql');
const PORT = process.env.PORT || '3000'

const app = express()
app.set('port', PORT)

//const port = 3000




var dbconn = mysql.createConnection({
    host     : 'l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'b7ar714azfw9xpe4',
    password : 'zgptgw4l9kic26iu',
    database : 'xsnqk4f1ukcjtji2',
    port : 3306
  });
  
  dbconn.connect(function(err){
    if(err){
      console.log('Database connection error', err);
    }else{
      console.log('Database connection successful');
    }
  });







// const config = {
//     host: 'l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: 'b7ar714azfw9xpe4',
//     password: 'zgptgw4l9kic26iu ',
//     database: 'xsnqk4f1ukcjtji2',
//     port: 3306
// };

dbconn.connect(function(err){
    if(err){
      console.log('Database connection error');
    }else{
      console.log('Database connection successful');
    }
  });
   

app.get('/obtenerDatos', (req, res) => {
    dbconn.query('SELECT * FROM users', (error, result) => {
        if (error) throw error;

        res.send(result);
    });
});

app.get('/api', (req, res)=>{
    res.send('Hola, gay')
})

app.get('/insertar',(req,res)=>{
    res.send('Esta api, nos permite insertar datos.')
})


app.listen(port, ()=> {
    console.log(`Api corriendo en el puerto ${port}`)
})



