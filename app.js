const express = require('express');
const Sequelize = require('sequelize');
const cors = require('cors');

const sequelize = new Sequelize(`mysql://QuQlttFnSQ:OJSsG6KcS2@remotemysql.com:3306/QuQlttFnSQ`);

try {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    });
} catch (error) {
    console.log('Unable to connect:', error);
}

const app = express();
app.use(cors());
app.use(express.static(__dirname + '/frontend'));
app.listen(3000, console.log('Listening on port 3000'));

app.get('/productos', (req, res) => {
    const query = 'SELECT * FROM productos';
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT }).then((data) => {
        res.send(data);
    });
});

app.get('/productos/:id', (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM productos where id = ${id}`;
    sequelize.query(query, { type: sequelize.QueryTypes.SELECT }).then((data) => {
        res.send([data]);
    });
    res.send({ producto: id });
});

app.post('/productos', (req, res) => {
    res.send({ productos });
});

app.delete('/productos/:id', (req, res) => {
    const id = req.params.id;
    res.send({ productos });
});

app.put('/productos/:id', (req, res) => {
    res.send({ productos });
});

app.post('/usuarios', (req, res) => {
    res.send({ usuarios });
});

app.put('/usuarios/:us_id', (req, res) => {
    res.send({ usuarios });
});

app.delete('/usuarios/:us_id', (req, res) => {
    res.send({ usuarios });
});

app.get('/usuarios/:us_id', (req, res) => {
    res.send({ usuarios });
});