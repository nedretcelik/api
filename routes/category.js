const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});
const Select_All_Categories = 'SELECT * FROM Category'
connection.connect(function(err) {
    if (err) {
        console.log("Error " + err);
    }
    console.log("Connected!");
});

router.get('/',(req,res)=>{
res.send("Hello from Mightiest King Alp Yuksel");
});
router.get('/getCategory',(req,res)=>{
    connection.query(Select_All_Categories,(err,results)=>{
    if(err){
        return res.send(err)
    }
    else{
        return res.json({
            data:results
        })
    }
    })
    });
module.exports = router;