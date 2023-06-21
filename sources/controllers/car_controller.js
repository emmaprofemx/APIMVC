

//------FUNCIONES PERSONALIZADAS RUTAS O END POINTS
const get1 = (req , res)=>{
    //SE DESPLIEGA EN LA PARTE DEL SERVIDOR
    console.log("Funcion get1 ejecutando")

    //SE DESPLIEGA EN EL CLIENTE 
    res
    .status(200)
    .send("Funcion get1 ejecutando")
}

const get2 = (req , res)=>{
    //SE DESPLIEGA EN LA PARTE DEL SERVIDOR
    console.log("Funcion get2 ejecutando")

    //SE DESPLIEGA EN EL CLIENTE 
    res
    .status(200)
    .send("Funcion get2 ejecutando")

}

const get3 = (req , res)=>{
 //SE DESPLIEGA EN LA PARTE DEL SERVIDOR
    console.log("Funcion get3 ejecutando")

 //SE DESPLIEGA EN EL CLIENTE 
    res
    .status(200)
    .send("Funcion get3 ejecutando")
}

const get4 = (req , res)=>{
    //SE DESPLIEGA EN LA PARTE DEL SERVIDOR
    console.log("Funcion get4 ejecutando")
    //SE DESPLIEGA EN EL CLIENTE 
    res
    .status(200)
    .send("Funcion get4 ejecutando")
}
//----------------



//EXPORTA ES EQUIVALENTE HACER QUE PASE DE ESTAR DE PRIVADO A PUBLICO EN JS - TIENE QUE ESTAR AL FINAL
module.exports = {
    get1,
    get2,
    get3,
    get4
};