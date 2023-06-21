//Librerias-constante , ya que no se modifican
const express = require("express") //ya quedo importada

//IMPORTANTO LAS RUTAS DE CAR_ROUTES
const car_routes = require("./v1/routes/car_routes")

//require - commonjs(ESM)

//Utilizarlo para generar el servidor

//Objeto servidor
const server = express();
//Definimos el puerto - no tiene que ser un puerto que este usando en otra app
//FTP usa el puerto 21
//Puedo usar cualquiera 
//Normalmente se usa el 3000 para node js
const puerto = 3000;

//Midleware
server.use(express.json())
//Una ruta http requiere dos parametros: require y respuesta
const funGet = (req , res)=>{
    console.log("Funcion funGet ejecutada")
    res
    .status(200)
    .send("<DOCTYPE html>"
    +"<html lang=\"es\">" 
    +"<head>"
	+"	<meta charset=\"utf-8\"/>"
	+"	<title>Lección 2 de HTML5</title>"
	+"</head>"
	+"<body>"
	+"	<header>"
	+"		<h1>Lección 2 de HTML5</h1>"
	+"		<h2>Cómo ser experto en html5</h2>"
	+"	<nav>"
	+"		<ul>"
	+"			<li><a href=\"#\">Inicio</a></li>"
	+"			<li><a href=\"#\">Programas</a></li>"
	+"			<li><a href=\"#\">Servicios</a></li>"
	+"			<li><a href=\"#\">Blog</a></li>"
	+"		</ul>"
	+"	</nav>"
	+"	</header>"
	+"	<section>"
	+"	</section>"
	+"	<aside>"
	+"		<h2>ASIDE</h2>"
	+"		<p>Puede haber mas de uno, y se les da formato diferente asignándoles ID o CLASS con CSS</p>"
	+"	</aside>"
	+"	<footer>"
	+"		<h2>FOOTER</h2>"
	+"		<p>Aqui todo el contenido del footer</p>"
	+"	</footer>"
	+"</body>"
    + "</html>")
    
}

//Ruta get generada para probar la funcionalidad de la API
server.get("/" , funGet)

// que sera una API / aclarar la version de la api / nombre de la API , MANDANDO A LLAMAR EL ENRUTADOR
server.use("/api/v1/cars" , car_routes)

//Inicializa el servidor para empezar a recibir peticiones
//Callback - colaborar que se esta ejecutando
//FUNCION PARA MANDAR A MOSTRAR QUE ESTA ESCUCHANDO EL SERVIDOR
const pardo = ()=>{
    console.log("Servidor escuchando en el puerto " + puerto)
}
//Parte para escuchare el servidor , usando los parametros puerto , y la funcion
server.listen(puerto , pardo)







