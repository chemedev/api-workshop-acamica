const express = require('express');
const Sequelize = require('sequelize');
const cors = require('cors');

const db = {
	user: 'QuQlttFnSQ',
	pw: 'OJSsG6KcS2',
	uri: 'remotemysql.com:3306',
	schema: 'QuQlttFnSQ',
};

const sequelize = new Sequelize(
	`mysql://${db.user}:${db.pw}@${db.uri}/${db.schema}`
);

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((error) => {
		console.log('Unable to connect:', error);
	});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/frontend'));
app.listen(3000, console.log('Listening on port 3000'));

app.get('/productos', (req, res) => {
	const query = 'SELECT * FROM productos';
	sequelize
		.query(query, { type: sequelize.QueryTypes.SELECT })
		.then((data) => {
			res.send(data);
		});
});

app.get('/productos/:id', (req, res) => {
	const id = req.params.id;
	const query = `SELECT * FROM productos where id = ${id}`;
	sequelize
		.query(query, { type: sequelize.QueryTypes.SELECT })
		.then((data) => {
			res.send(data);
		});
});

app.post('/productos', (req, res) => {
	const producto = req.body;
	console.log(producto);
	sequelize
		.query(
			'INSERT INTO productos (titulo, descripcion, precio, estado, forma_pago, id_usuario) VALUES (:titulo, :descripcion, :precio, :estado, :forma_pago, :id_usuario)',
			{
				replacements: producto,
			}
		)
		.then(() => res.status(204))
		.catch((e) => console.log('ERROR:', e.message));
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
