const express =require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

//middleware para analizar los datos JSON
app.use(express.json());

//Configuracion para la conexio mysql
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "practica"    
})

//conexion ala base de datos
db.connect((err) => {
    if (err) {
        console.error("ERROR AL CONECTAR A LA BASE DDE DATOS",err);
    } else {
        console.log("Conectado a la base de datos");
    }
})


//iniciar el servidor
app.listen(port,() => {
    console.log(`servidor corriendo en http//localhost:${port}`)
});
