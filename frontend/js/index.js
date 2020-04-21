//url del servidor
const serverUrl = 'http://localhost:3000/';

//! modelos
//usuario
class Usuario {
	constructor(id, nombre, apellido, contraseña, mail) {
		(this.id = id),
			(this.nombre = nombre),
			(this.apellido = apellido),
			(this.contraseña = contraseña),
			(this.mail = mail);
	}
}

//articulo
class Articulo {
	constructor(id, id_usuario, precio, descripcion) {
		(this.id = id),
			(this.id_usuario = id_usuario),
			(this.precio = precio),
			(this.descripcion = descripcion);
	}
}

//!CRUD articulos
//listar todos los articulos
const listarProducto = async () => {
	const header = {
		method: 'GET',
		mode: 'cors',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	};
	const response = await fetch(serverUrl + 'productos', header);
	const responseJson = await response.json().catch(function (error) {
		console.log('Hubo un problema con la petición Fetch:' + error.message);
	});
	return responseJson;
};

//crear un articulo
const crearProducto = async (producto) => {
	const header = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(producto),
	};
	await fetch(serverUrl + 'productos', header).catch((error) => {
		console.log('Hubo un problema con la petición Fetch:' + error.message);
	});
	return console.log('Producto subido correctamente.');
};

//ver un articulo
const verProducto = async (id) => {
	const response = await fetch(serverUrl + 'productos/' + id).catch(function (
		error
	) {
		console.log('Hubo un problema con la petición Fetch:' + error.message);
	});

	console.log(response);
	return response.JSON();
};

//editar un articulo
const editarProducto = async (producto, id) => {
	const header = {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(producto),
	};
	const response = await fetch(serverUrl + 'productos/' + id).catch(function (
		error
	) {
		console.log('Hubo un problema con la petición Fetch:' + error.message);
	});

	console.log(response);

	return response.JSON();
};

//borrar  un articulo
const borarProducto = async (id) => {
	const header = { method: 'DELETE' };
	const response = await fetch(serverUrl + 'productos/' + id).catch(function (
		error
	) {
		console.log('Hubo un problema con la petición Fetch:' + error.message);
	});

	console.log(response);
	return response.JSON();
};

//funciones que consultan al backend

//!registrar un usuario
function userLogging(user, password) {
	return 'jfe989ejve/kvjekwejvjwekvjwek';
}

//!crear un articulo para vender

//!ver el estado de sus productos

//!comprar articulos de otros usuarios

var listaProductos = document.getElementById('listaProductos');

window.onload = async function () {
	const productos = await listarProducto();

	productos.forEach((producto) => {
		let tarjeta = document.createElement('div');
		tarjeta.classList.add('item');
		tarjeta.innerHTML = `<div class="card ">
									<img src="./img/pic3.jpg" class="card-img-top " alt="... " />

									<div class="card-body ">
											<h5 class="card-title ">${producto.titulo}</h5>
											<p class="card-text ">
													${producto.descripcion}
											</p>
											<a href="# " class="btn btn-success ">${producto.estado}</a>
									</div>
							</div>`;
		listaProductos.appendChild(tarjeta);
	});

	const submit = document.getElementById('submit');

	submit.addEventListener('click', (e) => {
		e.preventDefault();
		const ProdNombre = document.getElementById('ProdNombre').value;
    const ProdDes = document.getElementById('ProdDes').value;
    const ProdPrecio = document.getElementById('ProdPrecio').value;
		producto = {
			titulo: ProdNombre,
			descripcion: ProdDes,
			precio: ProdPrecio,
			estado: 'en venta', // HARDCODEADO
			forma_pago: 'efectivo', // HARDCODEADO
			id_usuario: 1, // HARDCODEADO
    };
		crearProducto(producto);
	});
};
