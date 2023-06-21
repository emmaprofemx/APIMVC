//Importar el modulo express
//Librerias-constante , ya que no se modifican
const express = require("express") //ya quedo importada

const car_controller = require("../../controllers/car_controller")

//Generando el enrutador
const routes = express.Router()

routes
///-------------
 //ASOCIADO A LA PETICION HTTP A LA QUE ESTA GENERANDO UNA RUTA
.get("/", car_controller.get1)

  //LO SIGUEINTE ES COMPLETAR LA RUTA DE LA API
.get("/registros",car_controller.get2)//el orden es importante... 
  //si este get se pone despues del SIGUIENTE no funcionara, debido a que 
  //se tomaria a la palabra "registros" como parte del parametro (:idActuator) 
  //que se envia a la peticion http

  //MANDAR UN TEXTO CUALQUIERA QUE NO SEA LA PALABRA REGISTROS 

.get("/:idCarro",car_controller.get3) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... WHERE id_sensor = ID  

//Alternativa funcional... cuando se requiere obtener los registros de un sensor en particular...
.get("/:idCarro/registros",car_controller.get4) 

/*.post("/", actuatorController.insertActuatorRecord) 
.post("/new", actuatorController.insertNewActuator) 
.patch("/:idActuator", actuatorController.updateActuator) 
.delete("/:idActuator", actuatorController.deleteActuator);
*/

  //EXPORTA EL ROUTER PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
//EXPORTS ES EQUIVALENTE HACER QUE PASE DE ESTAR DE PRIVADO A PUBLICO EN JS - TIENE QUE ESTAR AL FINAL
module.exports = routes;
