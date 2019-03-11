const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host    : 'roomreserver.cmaqlsxikwgt.us-east-1.rds.amazonaws.com',
    user    : 'SeniorDesign845',
    password: 'spnproject2019',
    database: 'spn-scheduler'
});

const app = express();

connection.connect(function(err){
    (err)? console.log(err) : console.log(connection);
});

app.get('/', function(req, res) {
       connection.query('call dailyRoomReservations(1, \'2019-01-22 00:00:00\',\'2019-01-23 00:00:00\')', function(err, data) {
           (err)? res.send(err) : res.json({schedule :data[0]});
       });
});

app.get('/reservation', function (req, res) {
    connection.connect();

    connection.query('call dailyRoomReservations(1, \'2019-01-22 00:00:00\',\'2019-01-23 00:00:00\')', function(error, results, fields){
        if(error) throw error;
        console.log('Connected');
        res.send(results)
    });
    connection.end();
});

app.listen(4000, () => {
    console.log('g');
});