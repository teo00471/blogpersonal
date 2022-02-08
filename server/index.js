const { response } = require('express');

const bodyParser = require("body-parser")


// var request = require('request')

const express = require('express');

var mysql = require('mysql');


var http = require('http')

const PORT = process.env.PORT || '3306'

const app = express()

app.set('port', PORT)






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
   

app.get('/users', (req, res) => {
    dbconn.query('SELECT * FROM users', (error, result) => {
        if (error) throw error;

        res.send(result);
    });
});




app.post('/users', (req, res)=>
{
  dbconn.query('INSERT INTO users SET?', request.body, (error, result)  =>
  {

    res.status(201).send(`User added with ID: ${result.insertId}`)

    

  })
})









app.listen(PORT, ()=> {
    console.log(`Api corriendo en el puerto ${PORT}`)
})



