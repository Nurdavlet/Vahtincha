'use strict'

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.post('/api/form', (req, res) => {
    console.log(req.body);
    // res.writeHead(200, {'Content-Type': 'application/json'});
    switch(req.body.react) {
        case 'create': db.setnode(req.body).then(data => { res.send(data);     res.end(); }) ; break;
        case 'update': db.updatenotes(req.body).then(data => { res.send(data);     res.end(); }); break;
        case 'read': db.getnotes().then(data => { res.send(data);     res.end(); }); break;
        case 'delete': db.deleteone(req.body).then(data => { res.send(data);     res.end(); }); break;
        default : res.send({answer: 'no'}); req.end(); break;
    }

});

app.get('/api', (req, res) => {
    console.log(req.body());
    // res.writeHead(200, undefined )
    res.send({answer: 'ok'})
    res.end();
    
});

app.listen(5001);